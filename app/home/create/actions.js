'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addData(data) {

  

  const {
    studentName,
    joinDate,
    lastActive,
    cohort,
    status,
    courses,
    classStandard,
  } = data;

  try {
    let cohortEntry = await prisma.cohort.findUnique({
      where: { name: cohort },
    });

    if (!cohortEntry) {
      cohortEntry = await prisma.cohort.create({
        data: { name: cohort },
      });
    }

    // Create the student entry
    const student = await prisma.student.create({
      data: {
        name: studentName,
        joinDate: new Date(joinDate),
        lastActive: lastActive ? new Date(lastActive) : null,
        cohortId: cohortEntry.id,
        status,
        classStandard,
      },
    });

    // Link the student with courses in the StudentCourse table
    if (courses && courses.length > 0) {
      const courseEntries = await prisma.course.findMany({
        where: {
          name: { in: courses },
        },
      });

      // Ensure all courses in the object exist, if not, create them
      const courseIds = await Promise.all(
        courses.map(async (courseName) => {
          let course = courseEntries.find((c) => c.name === courseName);

          if (!course) {
            course = await prisma.course.create({
              data: { name: courseName },
            });
          }

          return course.id;
        })
      );

      // Create StudentCourse entries
      await Promise.all(
        courseIds.map((courseId) =>
          prisma.studentCourse.create({
            data: {
              studentId: student.id,
              courseId,
            },
          })
        )
      );
    }

    return { success: true, data: student };
  } catch (error) {
    console.error("Error adding data:", error);
    return { success: false, error: error.message };
  }
}

export async function updateData({ data  , rowData}) {
  console.log("Row from action:", rowData);
  console.log("Data from action:", data);

  try {
    // Fetch the existing student data from the database
    const studentInfo = await prisma.student.findUnique({
      where: {
        id: rowData.id, // Use the provided rowData.id
      },
      include: {
        cohort: true, // Include cohort data
        studentCourses: {
          include: {
            course: true, // Include course details
          },
        },
      },
    });

    if (!studentInfo) {
      console.error("Student not found.");
      return;
    }

    // Compare data and prepare the updated fields
    const updatedFields = {};

    // Compare simple fields
    if (data.name && data.name !== studentInfo.name) {
      updatedFields.name = data.name;
    }
    if (data.classStandard && data.classStandard !== studentInfo.classStandard) {
      updatedFields.classStandard = data.classStandard;
    }
    if (data.status && data.status !== studentInfo.status) {
      updatedFields.status = data.status;
    }
    if (data.joinDate && new Date(data.joinDate).toISOString() !== studentInfo.joinDate.toISOString()) {
      updatedFields.joinDate = new Date(data.joinDate);
    }
    if (data.lastActive && new Date(data.lastActive).toISOString() !== studentInfo.lastActive?.toISOString()) {
      updatedFields.lastActive = new Date(data.lastActive);
    }

    // Compare cohort
    if (data.cohort && data.cohort !== studentInfo.cohort.name) {
      const cohort = await prisma.cohort.findUnique({
        where: { name: data.cohort },
      });
      if (cohort) {
        updatedFields.cohortId = cohort.id;
      } else {
        console.error("Cohort not found.");
      }
    }

    // Compare courses
    if (data.courses) {
      const currentCourses = studentInfo.studentCourses.map((sc) => sc.course.name);
      const newCourses = data.courses.filter((course) => !currentCourses.includes(course));
      const removedCourses = currentCourses.filter((course) => !data.courses.includes(course));

      // Add new courses
      for (const courseName of newCourses) {
        const course = await prisma.course.findUnique({ where: { name: courseName } });
        if (course) {
          await prisma.studentCourse.create({
            data: {
              studentId: rowData.id,
              courseId: course.id,
            },
          });
        }
      }

      // Remove old courses
      for (const courseName of removedCourses) {
        const course = await prisma.course.findUnique({ where: { name: courseName } });
        if (course) {
          await prisma.studentCourse.deleteMany({
            where: {
              studentId: rowData.id,
              courseId: course.id,
            },
          });
        }
      }
    }

    // Update student record if there are changes
    if (Object.keys(updatedFields).length > 0) {
      await prisma.student.update({
        where: { id: rowData.id },
        data: updatedFields,
      });
    }

    console.log("Student information updated successfully.");
  } catch (error) {
    console.error("Error updating student information:", error);
  }
};