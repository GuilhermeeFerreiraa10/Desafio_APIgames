import { AlunoRepository } from "../src/datadase/aluno.repository";

const alunoRepository = new AlunoRepository();
async function main() {
  //listando todos os alunos
  const students = await alunoRepository.list();
  console.log(students);

  //Get by ID
  const student = await alunoRepository.GetbyID("12345");
  console.log(student);

}

main();
    