export interface CreateGameDto {
  title: string;
  genre: string;
  multiplayer?: boolean;
  size: number;
  price: number;
  platform: string;
}