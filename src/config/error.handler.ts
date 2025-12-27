import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Response } from "express";

export function handleError(res: Response, error: any) {
    // Erros conhecidos do Prisma (ex: ID não encontrado, violação de banco)
    if (error instanceof PrismaClientKnownRequestError) {
        console.error(`Erro Prisma [${error.code}]: ${error.message}`);
        
        // P2025 é o código do Prisma para "Registro não encontrado"
        const status = error.code === 'P2025' ? 404 : 400;
        
        return res.status(status).json({
            error: "Erro de Banco de Dados",
            code: error.code,
            message: error.message
        });
    }

    // Erros genéricos
    console.error("Erro inesperado:", error);
    return res.status(500).json({
        error: "Internal Server Error",
        message: error.message || "An unknown error occurred in Aura Archive"
    });
}