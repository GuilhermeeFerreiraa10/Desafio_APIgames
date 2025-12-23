-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(120) NOT NULL,
    "email" CHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "dt_birth" DATE,
    "formed" BOOLEAN NOT NULL DEFAULT false,
    "dt_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_uptade" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adress" (
    "id" TEXT NOT NULL,
    "road" VARCHAR(30) NOT NULL,
    "neighborhood" VARCHAR(30) NOT NULL,
    "number" INTEGER NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "idStudent" TEXT NOT NULL,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "ementa" TEXT NOT NULL,
    "hourlyLoad" DECIMAL(65,30) NOT NULL,
    "max_alunos" SMALLINT NOT NULL DEFAULT 30,
    "status" TEXT NOT NULL,
    "dt_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_uptade" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matricula" (
    "id_student" TEXT NOT NULL,
    "id_course" TEXT NOT NULL,
    "dt_maricula" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matricula_pkey" PRIMARY KEY ("id_student","id_course")
);

-- CreateTable
CREATE TABLE "material" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "discription" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "avaliable" TEXT NOT NULL,
    "dt_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_uptade" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "material_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "adress_idStudent_key" ON "adress"("idStudent");

-- AddForeignKey
ALTER TABLE "adress" ADD CONSTRAINT "adress_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assessment" ADD CONSTRAINT "assessment_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_id_course_fkey" FOREIGN KEY ("id_course") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
