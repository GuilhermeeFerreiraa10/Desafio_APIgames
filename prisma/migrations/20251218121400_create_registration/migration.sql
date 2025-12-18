-- CreateTable
CREATE TABLE "registration" (
    "id_student" TEXT NOT NULL,
    "id_course" TEXT NOT NULL,
    "dt_registration" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registration_pkey" PRIMARY KEY ("id_student","id_course")
);

-- AddForeignKey
ALTER TABLE "registration" ADD CONSTRAINT "registration_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registration" ADD CONSTRAINT "registration_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
