export interface CreateCharacterDto {
  name: string;
  age: number;
  isALive?: boolean;
  forcePower: number;
  intelligence: number;
  agility: string;
  magic: string;
  guns: string;
  gameId: string;
}