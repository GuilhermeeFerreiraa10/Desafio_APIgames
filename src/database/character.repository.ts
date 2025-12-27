import { PrismaClient } from '@prisma/client';
import { CreateCharacterDto } from '../dtos/create-character.dto';

const prisma = new PrismaClient();

export class CharacterRepository {
  async create(data: CreateCharacterDto) {
    return await prisma.character.create({
      data: {
        name: data.name,
        age: data.age,
        isALive: data.isALive ?? true, 
        forcePower: data.forcePower,
        intelligence: data.intelligence,
        agility: data.agility,
        magic: data.magic,
        guns: data.guns,
        gameId: data.gameId,
      },
    });
  }
async update(id: string, data: any) {
    return await prisma.character.update({
        where: { id },
        data
    });
}

async delete(id: string) {
    return await prisma.character.delete({
        where: { id }
    });
}
  // ... rest of the code
}