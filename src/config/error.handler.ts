import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Response } from "express";

export function handleError(res: Response, error: any) {
    // 1. Log colorido no terminal para destacar o erro do resto das mensagens
    console.error("\n\x1b[31m--- ERROR DETECTED ---\x1b[0m");

    // Erros conhecidos do Prisma
    if (error instanceof PrismaClientKnownRequestError) {
        // Log detalhado para o desenvolvedor ver no terminal
        console.error(`Erro Prisma [${error.code}]: ${error.message}`);
        
        const status = error.code === 'P2025' ? 404 : 400;
        
        return res.status(status).json({
            error: "Erro de Banco de Dados",
            code: error.code,
            message: error.message
        });
    }

    // Erros genéricos (Aqui ele loga o erro completo para você debugar)
    console.error("Erro inesperado:", error);
    
    return res.status(500).json({
        error: "Internal Server Error",
        message: error.message || "An unknown error occurred in Aura Archive"
    });
}