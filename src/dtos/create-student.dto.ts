export interface CreateStudentDto {
    name: string;
    email: string;
    password: string;
    dtNascimento?: Date;
    formed?: boolean;
}