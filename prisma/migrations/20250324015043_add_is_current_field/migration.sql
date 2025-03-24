-- AlterTable
ALTER TABLE "experiences" ADD COLUMN     "isCurrent" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "endDate" DROP NOT NULL;
