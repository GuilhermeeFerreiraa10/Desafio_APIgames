import { PrismaClient } from '@prisma/client';
import { CreateGameDto } from '../dtos/create-game.dto';

const prisma = new PrismaClient();

export class GameRepository {
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
  async getGameWithCharacters(id: string) {
  return await prisma.game.findUnique({
    where: { id },
    include: {
      characters: true, 
    },
  });
}

async delete(id: string) {
  return await prisma.game.delete({
    where: { 
      id 
    }
  });
}

async update(id: string, data: any) {
  return await prisma.game.update({
    where: { id },
    data: data, 
  });
}

  // Listar todos os jogos 
  async findAll() {
    return await prisma.game.findMany({
      include: {
        characters: true,  
      },
    });
  }

async findByTitle(title: string) {
  return await prisma.game.findUnique({
    where: { title: title }
  });
}

  // Buscar um jogo específico por ID
  async findById(id: string) {
    return await prisma.game.findUnique({
      where: { id },
      include: { characters: true },
    });
  }
  //Search for Characters by game
    async getStats() {
    const totalGames = await prisma.game.count();
    const totalCharacters = await prisma.character.count();
    return {
      totalGames,
      totalCharacters,
      message: "Aura Archive Database Status"
    };
  }
}

