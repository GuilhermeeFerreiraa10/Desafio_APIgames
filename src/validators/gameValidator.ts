export function validateGame(data: any) {
  const errors: string[] = [];

  // Validação de Strings (Título, Gênero, Plataforma)
  if (!data.title || typeof data.title !== 'string' || data.title.trim() === "") {
    errors.push("O campo 'title' é obrigatório e deve ser um texto.");
  }
  
  if (!data.genre || typeof data.genre !== 'string' || data.genre.trim() === "") {
    errors.push("O campo 'genre' é obrigatório e deve ser um texto.");
  }

  if (!data.platform || typeof data.platform !== 'string' || data.platform.trim() === "") {
    errors.push("O campo 'platform' é obrigatório e deve ser um texto.");
  }

  // Validação de Números (Preço e Tamanho)
  if (data.price === undefined || typeof data.price !== 'number' || data.price < 0) {
    errors.push("O campo 'price' deve ser um número igual ou maior que 0.");
  }

  if (data.size === undefined || typeof data.size !== 'number' || data.size <= 0) {
    errors.push("O campo 'size' deve ser um número maior que 0.");
  }

  return errors;
}