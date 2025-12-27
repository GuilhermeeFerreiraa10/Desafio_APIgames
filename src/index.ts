import express, { Request, Response } from 'express';
import { GameRepository } from './database/game.repository';
import { handleError } from "../src/config/error.handler";
import { CharacterRepository } from './database/character.repository';

const app = express();
app.use(express.json());

const gameRepo = new GameRepository();
const charRepo = new CharacterRepository();

// --- ROUTES OF AURA ARCHIVE ---

// Route to register the game
app.post('/games', async (req: Request, res: Response) => {
  try {
    const game = await gameRepo.create(req.body);
    res.status(201).json(game);
  } catch (error: any) {
    handleError(res, error); // Usando seu handler
  }
});

// Route to list all games
app.get('/games', async (req: Request, res: Response) => {
  try {
    const games = await gameRepo.findAll();
    res.json(games);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Route to register the Character 
app.post('/characters', async (req: Request, res: Response) => {
  try {
    const character = await charRepo.create(req.body);
    res.status(201).json(character);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Update a character
app.put('/characters/:id', async (req: Request, res: Response) => {
  const id  = req.params.id as string
  try {   
    const updatedCharacter = await charRepo.update(id, req.body);
    res.json(updatedCharacter);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Delete a character 
app.delete('/characters/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string
  try {
    await charRepo.delete(id);
    res.status(204).send(); 
  } catch (error: any) {
    handleError(res, error);
  }
});

//-----------------------------------------------------------------------
// Port where the server will run
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`--- Aura Archive Online ---`);
  console.log(`Server running at http://localhost:${PORT}`);
});