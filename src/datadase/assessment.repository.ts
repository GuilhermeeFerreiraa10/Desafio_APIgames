import { prisma } from "../config/prisma.config";
import { handleError } from "../config/error.handler";
import { CreateAssessmentDto } from "../dtos/create-assessment.dto";
import { StudentRepository } from "./student.repository";
import { UpdateAssessmentDto } from "../dtos/update-assessment.dto";

export class AssessmentRepository {
    //list assessments
    public async list() {
        try {
        const assessments = await prisma.assessment.findMany({
            select: {
                id: true,
                Discipline: true,
                notice: true,
                idStudent: true,
            }
        });
        return assessments;
        
        } catch (error: any) {
            handleError(error);    
        }
    }

    //get assessment by ID
    public async GetbyID(id: string) {
        try {
        const assessment = await prisma.assessment.findUnique({
            where: {
                id
            },
        });
        return assessment;
        } catch (error: any) {
            handleError(error);    
        }
    }

    //create assessment
    public async create(dados: CreateAssessmentDto) {
        try {
            const studentRepository = new StudentRepository();
            const student = await studentRepository.GetbyID(dados.idStudent);
            if (!student) {
                console.log("ERROR!! The student was not found.");
                
                return null;
            }

            const assessment = await prisma.assessment.create({
            data: dados
        });
        return assessment;
        
        } catch (error: any) {
            handleError(error);    
        }
    }

    //update assessment
    public async update(id: string, dados: UpdateAssessmentDto) {
        try {
        const assessment = await prisma.assessment.update({
            where: { 
                id 
            },
            data: dados
        });
        return assessment;    
        } catch (error: any) {
            handleError(error);    
        }
    }

    //delete assessment
    public async delete(id: string) {
        try {
        const deletedAssessment = await prisma.assessment.delete({
            where: { 
                id 
            },
        });
        return deletedAssessment;
        } catch (error: any) {
            handleError(error);    
        }
    }
}