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
