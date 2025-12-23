import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const students = await db.student.findMany();
  console.log(students);
}

main();
    