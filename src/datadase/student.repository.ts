import { prisma } from "../config/prisma.config";
import { CreateStudentDto } from "../dtos/create-student.dto";
import { handleError } from "../config/error.handler";
import { UpdateStudentDto } from "../dtos/update-student.dto";

export class StudentRepository {
    
    //SELECT * FROM student;
    public async list() {
        try {
        const students = await prisma.student.findMany({
            where: {
                formed: false
            },
              select: {
                id: true,
                name: true,
                email: true,
            }
        });
        
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
    public async create(dados: CreateStudentDto) {
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
   public async update(id: string, dados: UpdateStudentDto) {
    try {
    const Student = await prisma.student.update({
            where: { 
                id 
            },
            data: dados
        });
        return Student;
    
    } catch (error: any) {
        return handleError(error);        
    }   
     }

    //método para deletar um aluno
    public async delete(id: string) {
        try {
            const deletedStudent = await prisma.student.delete({
            where: { 
                id 
            },
        });
        return deletedStudent;
        
        } catch (error: any) {
            console.error("Error deleting student:", error);
            return handleError(error);
        }
    }
}

