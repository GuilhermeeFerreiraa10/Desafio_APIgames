import { StudentRepository } from "./datadase/student.repository";
import { AssessmentRepository } from "./datadase/assessment.repository";

const studentRepository = new StudentRepository();
const assessmentRepository = new AssessmentRepository();
async function main() {
  // List all students
  // const students = await studentRepository.list();
  // console.log(students);

  //Get by ID
  // const student = await studentRepository.GetbyID("62e278a1-5323-47a8-bebd-93be35f6fe19");
  // console.log(student);

  // Create new student
  // const newStudent = await studentRepository.create({
  //   name: "Andreia Ferreira",
  //   email: "andreia13@example.com",
  //   password: "123456",
  // });

  // console.log(newStudent);


// Update student
//   const updatedStudent = await studentRepository.update("62e278a1-5323-47a8-bebd-93be35f6fe19", {
//     name: "Andreia Souza",
//     email: "deia13@example.com",
//   });

//   console.log(updatedStudent);
// }

// Delete student
//   const deletedStudent = await studentRepository.delete("43310507-a843-4e0a-84cb-5df0e3926b03");
//   console.log(deletedStudent);

// Create new assessment 
  // const newAssessment = await assessmentRepository.create({
  //   Discipline: "React",
  //   notice: 9,
  //   idStudent: "62e278a1-5323-47a8-bebd-93be35f6fe19",
  // });
  // console.log(newAssessment);
}
main();