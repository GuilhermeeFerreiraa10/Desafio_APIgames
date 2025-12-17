/*
  Warnings:

  - You are about to drop the column `descricao` on the `material` table. All the data in the column will be lost.
  - You are about to drop the column `disponivel` on the `material` table. All the data in the column will be lost.
  - You are about to drop the column `dt_atualizacao` on the `material` table. All the data in the column will be lost.
  - You are about to drop the column `dt_criacao` on the `material` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `material` table. All the data in the column will be lost.
  - You are about to drop the `aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `curso` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `avaliable` to the `material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discription` to the `material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dt_uptade` to the `material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "material" DROP COLUMN "descricao",
DROP COLUMN "disponivel",
DROP COLUMN "dt_atualizacao",
DROP COLUMN "dt_criacao",
DROP COLUMN "titulo",
ADD COLUMN     "avaliable" TEXT NOT NULL,
ADD COLUMN     "discription" TEXT NOT NULL,
ADD COLUMN     "dt_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dt_uptade" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "aluno";

-- DropTable
DROP TABLE "curso";

-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "nanme" VARCHAR(120) NOT NULL,
    "email" CHAR(60) NOT NULL,
    "password" TEXT NOT NULL,
    "dt_birth" DATE,
    "formed" BOOLEAN NOT NULL DEFAULT false,
    "dt_create" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_uptade" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adress" (
    "id" TEXT NOT NULL,
    "road" VARCHAR(30) NOT NULL,
    "neighborhood" VARCHAR(30) NOT NULL,
    "number" INTEGER NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "idStudent" TEXT NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
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

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Adress_idStudent_key" ON "Adress"("idStudent");

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
