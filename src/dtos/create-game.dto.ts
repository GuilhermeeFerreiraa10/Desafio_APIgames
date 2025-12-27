export interface CreateGameDto {
  title: string;
  genre: string;
  multiplayer?: boolean;
  size: number;
  price: number;
  platform: string;
  releaseDate?: Date; // Opcional, pois no schema tem default(now)
}