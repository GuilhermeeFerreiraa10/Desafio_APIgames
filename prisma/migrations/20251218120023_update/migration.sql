-- CreateTable
CREATE TABLE "update" (
    "id" TEXT NOT NULL,
    "Discipline" VARCHAR(30) NOT NULL,
    "notice" SMALLINT NOT NULL,
    "dt_assessment" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_student" TEXT NOT NULL,

    CONSTRAINT "update_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "update" ADD CONSTRAINT "update_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
