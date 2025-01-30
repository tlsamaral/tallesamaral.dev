/*
  Warnings:

  - Added the required column `appUrl` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repositoryUrl` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "appUrl" TEXT NOT NULL,
ADD COLUMN     "repositoryUrl" TEXT NOT NULL;
