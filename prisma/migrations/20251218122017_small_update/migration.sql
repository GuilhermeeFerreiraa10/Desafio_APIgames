/*
  Warnings:

  - You are about to drop the `registration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `update` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "registration" DROP CONSTRAINT "registration_id_course_fkey";

-- DropForeignKey
ALTER TABLE "registration" DROP CONSTRAINT "registration_id_student_fkey";

-- DropForeignKey
ALTER TABLE "update" DROP CONSTRAINT "update_id_student_fkey";

-- DropTable
DROP TABLE "registration";

-- DropTable
DROP TABLE "update";

-- CreateTable
CREATE TABLE "assessment" (
    "id" TEXT NOT NULL,
    "Discipline" VARCHAR(30) NOT NULL,
    "notice" SMALLINT NOT NULL,
    "dt_assessment" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_student" TEXT NOT NULL,

    CONSTRAINT "assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matricula" (
    "id_student" TEXT NOT NULL,
    "id_course" TEXT NOT NULL,
    "dt_maricula" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matricula_pkey" PRIMARY KEY ("id_student","id_course")
);

-- AddForeignKey
ALTER TABLE "assessment" ADD CONSTRAINT "assessment_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
