import express, { Request, Response } from 'express';
import { GameRepository } from './database/game.repository';
import { handleError } from "../src/config/error.handler";
import { CharacterRepository } from './database/character.repository';
import { validateGame } from './validators/gameValidator';

const app = express();
app.use(express.json());

const gameRepo = new GameRepository();
const charRepo = new CharacterRepository();

// --- ROUTES OF AURA ARCHIVE ---

// Route to register the game
app.post('/games', async (req: Request, res: Response) => {
  const errors = validateGame(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ 
      status: "Erro de Validação",
      message: "Os dados enviados são inválidos", 
      errors: errors 
    });
  }

  try {
    const newGame = await gameRepo.create(req.body);
    res.status(201).json(newGame);
  } catch (error: any) {
    handleError(res, error);
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

app.get('/games/:id/details', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "ID do jogo é obrigatório!" });

    const gameDetails = await gameRepo.getGameWithCharacters(id);

    if (!gameDetails) {
      return res.status(404).json({ message: "Jogo não encontrado!" });
    }
    res.json(gameDetails);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Update a game
app.put('/games/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    const dataToUpdate = {
      ...req.body,
      size: req.body.size ? Number(req.body.size) : undefined,
      price: req.body.price ? Number(req.body.price) : undefined,
    };

    const updatedGame = await gameRepo.update(id, dataToUpdate);
    res.json(updatedGame);
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

// LIST ALL CHARACTERS DIRECTLY
app.get('/characters', async (req: Request, res: Response) => {
  try {
    const characters = await charRepo.findAll();
    res.json(characters);
  } catch (error: any) {
    handleError(res, error);
  }
});

// SEARCH CHARACTERS BY NAME
app.get('/characters/search/:name', async (req: Request, res: Response) => {
  const name = req.params.name as string;
  try {
    const characters = await charRepo.searchByName(name);
    if (characters.length === 0) {
      return res.status(404).json({ 
        message: `Nenhum personagem encontrado com o nome: ${name}` 
      });
    }
    res.json(characters);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Rota de Estatísticas
app.get('/stats', async (req: Request, res: Response) => {
  try {
    const stats = await gameRepo.getStats();
    res.json(stats);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Update a character
app.put('/characters/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {   
    const updatedCharacter = await charRepo.update(id, req.body);
    res.json(updatedCharacter);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Delete a character 
app.delete('/characters/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    await charRepo.delete(id);
    res.status(200).send({ message: "Character successfully deleted" }); 
  } catch (error: any) {
    handleError(res, error);
  }
});

// Delete a game
app.delete('/games/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    await gameRepo.delete(id);
    res.status(200).send({ message: "Game successfully deleted." }); 
  } catch (error: any) {
    handleError(res, error);
  }
});

// --- SERVER START ---
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`--- Aura Archive Online ---`);
  console.log(`Server running at http://localhost:${PORT}`);
});