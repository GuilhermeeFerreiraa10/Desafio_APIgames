import { prisma } from "../config/prisma.config";
import { CreateAlunoDto } from "../dtos/create-aluno.dto";
import { handleError } from "../config/error.handler";

export class AlunoRepository {
    //método para listar todos os alunos
    //SELECT * FROM student;
    public async list() {
        try {
        const students = await prisma.student.findMany();
        return students;   
        } catch (error: any) {
            return handleError(error);
        }
    }

    //método para buscar um aluno pelo ID
    public async GetbyID(id: string) {
        const student = await prisma.student.findUnique({
            where: { 
                id 
            },
        });
        
        return student;
    }

    //método para criar um novo aluno
    public async create(dados: CreateAlunoDto) {
        try {
        const Student = await prisma.student.create({
        data: dados
        });
        return Student; 
        } catch (error: any) {
            return handleError(error);
        }
   }
   //método para atualizar um aluno
   public async update(id: string, dados: Partial<CreateAlunoDto>) {
        const updatedStudent = await prisma.student.update({
            where: { id },
            data: dados
        });
        return updatedStudent;
 }
}
