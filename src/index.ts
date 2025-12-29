import express, { Request, Response } from 'express';
import { GameRepository } from './database/game.repository';
import { handleError } from "../src/config/error.handler";
import { CharacterRepository } from './database/character.repository';
import { validateGame } from './validators/gameValidator';
import { validateCharacter } from './validators/charValidator';
import morgan from 'morgan';
import chalk from 'chalk';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const gameRepo = new GameRepository();
const charRepo = new CharacterRepository();

// --- ROUTES OF AURA ARCHIVE ---
// Route to register the game
app.post('/games', async (req: Request, res: Response) => {
  const errors = validateGame(req.body);
  if (errors.length > 0) {
    console.log(chalk.yellow("Erro de validação:"), errors[0]);
    return res.status(400).json({ error: errors[0] });
  }

  try {
    // VERIFICAÇÃO DE DUPLICIDADE
    const existingGame = await gameRepo.findByTitle(req.body.title);
    if (existingGame) {
      console.log(chalk.red("Conflito:"), `Jogo ${req.body.title} já existe.`);
      return res.status(409).json({ error: "Já existe um jogo cadastrado com este título." });
    }

    const newGame = await gameRepo.create(req.body);
    console.log(chalk.green("Sucesso:"), `Jogo criado: ${newGame.title}`);
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

// Route to list of a specific game's characters
app.get('/games/:id/details', async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const gameDetails = await gameRepo.getGameWithCharacters(id);

    if (!gameDetails) {
      console.log(chalk.yellow("Aviso:"), `Jogo ${id} não encontrado.`);
      return res.status(404).json({ message: "Jogo não encontrado!" });
    }
    res.json(gameDetails);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Update a game
app.put('/games/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    const updatedGame = await gameRepo.update(id, req.body);
    console.log(chalk.blue("Update:"), `Jogo ${updatedGame.title} atualizado.`);
    res.json(updatedGame);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Route to register the Character 
app.post('/characters', async (req: Request, res: Response) => {
  const errors = validateCharacter(req.body);
  if (errors.length > 0) {
    console.log(chalk.yellow("Erro de validação (Char):"), errors[0]);
    return res.status(400).json({ error: errors[0] });
  }

  try {
    const character = await charRepo.create(req.body);
    console.log(chalk.green("Sucesso:"), `Personagem criado: ${character.name}`);
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
      console.log(chalk.yellow("Busca:"), `Nenhum personagem chamado ${name}.`);
      return res.status(404).json({ message: `Nenhum personagem encontrado com o nome: ${name}` });
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
    console.log(chalk.blue("Update:"), `Personagem ${updatedCharacter.name} atualizado.`);
    res.json(updatedCharacter);
  } catch (error: any) {
    handleError(res, error);
  }
});

// Delete a character 
app.delete('/characters/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    const deletedChar = await charRepo.delete(id);
    console.log(chalk.red("[DELETE]"), `Personagem removido: ${deletedChar.name}`);
    res.status(200).send({ message: `O personagem ${deletedChar.name} foi deletado com sucesso.` });
  } catch (error: any) {
    handleError(res, error);
  }
});

// Delete a game
app.delete('/games/:id', async (req: Request, res: Response) => {
  const id = req.params.id as string;
  try {
    const deletedGame = await gameRepo.delete(id);
    console.log(chalk.red("[DELETE]"), `Jogo removido: ${deletedGame.title}`);
    res.status(200).send({ message: `O jogo ${deletedGame.title} foi deletado com sucesso.` });
  } catch (error: any) {
    handleError(res, error);
  }
});

// --- SERVER START ---
const PORT = 3333;
app.listen(PORT, () => {
  console.log(chalk.cyan(`--- Aura Archive Online ---`));
  console.log(chalk.white(`Server running at http://localhost:${PORT}`));
});