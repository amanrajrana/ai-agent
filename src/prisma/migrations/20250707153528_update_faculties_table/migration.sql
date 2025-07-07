/*
  Warnings:

  - You are about to drop the column `education` on the `faculties` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "faculties" DROP COLUMN "education",
ADD COLUMN     "qualification" TEXT;
