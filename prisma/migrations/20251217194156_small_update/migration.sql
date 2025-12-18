/*
  Warnings:

  - You are about to drop the `Adress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Adress" DROP CONSTRAINT "Adress_idStudent_fkey";

-- DropTable
DROP TABLE "Adress";

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

-- CreateIndex
CREATE UNIQUE INDEX "adress_idStudent_key" ON "adress"("idStudent");

-- AddForeignKey
ALTER TABLE "adress" ADD CONSTRAINT "adress_idStudent_fkey" FOREIGN KEY ("idStudent") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
