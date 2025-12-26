-- DropForeignKey
ALTER TABLE "assessment" DROP CONSTRAINT "assessment_id_student_fkey";

-- DropForeignKey
ALTER TABLE "matricula" DROP CONSTRAINT "matricula_id_course_fkey";

-- DropForeignKey
ALTER TABLE "matricula" DROP CONSTRAINT "matricula_id_student_fkey";

-- AddForeignKey
ALTER TABLE "assessment" ADD CONSTRAINT "assessment_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
