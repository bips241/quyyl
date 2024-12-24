/*
  Warnings:

  - Added the required column `facultyName` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "facultyName" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT;
