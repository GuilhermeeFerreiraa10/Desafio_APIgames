import { prisma } from "../config/prisma.config";

export class AlunoRepository {
    //método para listar todos os alunos
    //SELECT * FROM student;
    public async list() {
        const students = await prisma.student.findMany();
        return students;
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
}

