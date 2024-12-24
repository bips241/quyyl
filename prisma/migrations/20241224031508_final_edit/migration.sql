/*
  Warnings:

  - You are about to drop the column `facultyName` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Course` table. All the data in the column will be lost.
  - Added the required column `classStandard` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "facultyName",
DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "classStandard" TEXT NOT NULL;
