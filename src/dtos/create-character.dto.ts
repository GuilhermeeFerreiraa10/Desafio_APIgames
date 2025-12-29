export interface CreateCharacterDto {
  name: string;
  age: number;
  forcePower: number;
  intelligence: number;
  agility: string;
  magic: string;
  guns: string;
  gameId: string;
  isDLC?: boolean;   
  isALive?: boolean; 
}