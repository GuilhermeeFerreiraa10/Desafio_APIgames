import { AlunoRepository } from "../src/datadase/aluno.repository";

const alunoRepository = new AlunoRepository();
async function main() {
  //listando todos os alunos
  // const students = await alunoRepository.list();
  // console.log(students);

  //Get by ID
  const student = await alunoRepository.GetbyID("62e278a1-5323-47a8-bebd-93be35f6fe19");
  console.log(student);

}

main();
    