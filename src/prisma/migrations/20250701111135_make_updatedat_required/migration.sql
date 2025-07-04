/*
  Warnings:

  - Made the column `updatedAt` on table `admission_processes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `faqs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `fee_structures` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `important_links` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `support_tickets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `syllabus` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `teachers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "admission_processes" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "faqs" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "fee_structures" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "important_links" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "support_tickets" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "syllabus" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "teachers" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updatedAt" SET NOT NULL;
