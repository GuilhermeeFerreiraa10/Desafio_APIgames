export function validateCharacter(data: any) {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim() === "") {
    errors.push("O nome do personagem é obrigatório.");
  }

  if (data.forcePower === undefined || typeof data.forcePower !== 'number' || data.forcePower < 0 || data.forcePower > 100) {
    errors.push("A força (forcePower) deve ser um número entre 0 e 100.");
  }

  if (!data.gameId || typeof data.gameId !== 'string') {
    errors.push("O 'gameId' é obrigatório para vincular o personagem a um jogo.");
  }

  return errors;
}