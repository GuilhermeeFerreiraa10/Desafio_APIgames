export interface CreateAssessmentDto {
    Discipline: string;
    notice: number;
    idStudent: string;
    dtAssessment?: Date;
}