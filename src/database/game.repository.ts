import { PrismaClient } from '@prisma/client';
import { CreateGameDto } from '../dtos/create-game.dto';

const prisma = new PrismaClient();

export class GameRepository {
  // Criar o jogo (ex: Mortal Kombat 1)
  async create(data: CreateGameDto) {
    return await prisma.game.create({
      data: {
        title: data.title,
        genre: data.genre,
        multiplayer: data.multiplayer ?? true,
        size: data.size,
        price: data.price,
        platform: data.platform,
      },
    });
  }

  // Listar todos os jogos para você pegar o ID no Postman
  async findAll() {
    return await prisma.game.findMany({
      include: {
        characters: true, // Já traz os personagens vinculados 
      },
    });
  }

  // Buscar um jogo específico por ID
  async findById(id: string) {
    return await prisma.game.findUnique({
      where: { id },
      include: { characters: true },
    });
  }
 
}