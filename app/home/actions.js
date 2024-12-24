'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Delete(deletingRow) {
  if (!deletingRow) return;

  try {
    // Begin transaction to ensure atomicity (all-or-nothing deletion)
    await prisma.$transaction([
      // Step 1: Delete related records from the StudentCourse table
      prisma.studentCourse.deleteMany({
        where: { studentId: deletingRow.id },
      }),

      // Step 2: Delete the student record from the Student table
      prisma.student.delete({
        where: { id: deletingRow.id },
      }),
    ]);

    console.log("Deleted student and related records:", deletingRow);

  } catch (error) {
    console.error("Error deleting student record:", error);
  }
};