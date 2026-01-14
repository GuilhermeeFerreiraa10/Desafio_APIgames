# 🎮 Aura Archive API

Este projeto é um desafio prático proposto pela **Growdev** para consolidar conhecimentos em bancos de dados relacionais, manipulação de ORMs e integração de APIs com serviços de nuvem.

## 🚀 Tecnologias Utilizadas
- **Node.js**: Ambiente de execução.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Prisma ORM**: Modelagem de dados e comunicação eficiente com o banco. (versão 6.1.9)
- **PostgreSQL (Neon.tech)**: Banco de dados relacional hospedado na nuvem (AWS).
- **Express**: Framework para criação e gerenciamento de rotas.

## 🏗️ Arquitetura do Banco de Dados
O projeto foi estruturado seguindo as melhores práticas de bancos relacionais:
- **Relacionamento 1:N**: Um jogo (**Game**) pode possuir múltiplos personagens (**Character**) vinculados.
- **UUID**: Todos os identificadores utilizam o padrão UUID para garantir a unicidade global dos registros.

### Modelos Principais:
- **Game**: Gerencia informações como título, gênero, plataforma, preço, tamanho e datas de lançamento.
- **Character**: Gerencia estatísticas de combate (força, inteligência, agilidade), idade, status de vida e o vínculo direto com um jogo.

## 🛣️ Métodos HTTP Implementados
A API segue o padrão REST, permitindo as seguintes operações:
- **GET**: Listagem de jogos e personagens (com integração de dados).
- **POST**: Criação de novos registros de jogos e heróis.
- **PUT**: Atualização de informações existentes.
- **DELETE**: Remoção de registros do banco de dados.
---
Desafio concluído com sucesso como parte do currículo de formação da **Growdev**! 🕹️
