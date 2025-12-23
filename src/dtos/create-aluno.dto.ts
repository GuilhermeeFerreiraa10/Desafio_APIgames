export interface CreateAlunoDto {
    name: string;
    email: string;
    password: string;
    dtNascimento?: Date;
    formed?: boolean;
}