<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Projeto NestJS com Mongodb

Este é um projeto em NestJS desenvolvido como base para exercícios e consulta. O projeto implementa operações básicas CRUD (Create, Read, Update, Delete) para gerenciar uma entidade `User`, incluindo listagem, busca por ID, salvamento, atualização e exclusão de funcionários.

## Requisitos

- Node.js (v20+)
- npm (ou yarn)
- mongodb

## Instalação

1. **Clone o repositório:**

   ```bash
   git@github.com:RobsonFe/CRUD-NestJS.git
   cd crud
   ```

2. **Instale as dependências:**

   Utilizando npm:

   ```bash
   npm install
   ```

   ou utilizando yarn:

   ```bash
   yarn
   ```

## Configuração

- O projeto utiliza o NestJS com TypeScript para facilitar o desenvolvimento e manutenção.
- O serviço `registerService` gerencia a entidade `Register`, com operações CRUD implementadas.
- O controlador `registerController` define rotas para acessar e manipular os dados de pessoas.

## Uso

Para executar o servidor localmente, utilize o seguinte comando:

```bash
npm run start:dev
```

ou

```bash
yarn start:dev
```

Isso iniciará o servidor localmente em `http://localhost:3000`.

### Rotas Disponíveis

- **Listar todas os usuarios:**

  ```
  GET http://localhost:3000/register/api/v1/list
  ```

- **Buscar usuario por ID:**

  ```
  GET http://localhost:3000/register/api/v1/search/1
  ```

- **Criar usuario:**

  ```
  POST http://localhost:3000/register/api/v1/save
  Body: { "id": 1, "name": "Rodrigo", "salary": 3000, "position": "developer" }
  ```

- **Atualizar usuarios por ID:**

  ```
  PUT http://localhost:3000/register/api/v1/update/1
  Body: { "name": "New name", "salary": 5000, "position": "full stack" }
  ```

- **Excluir usuario por ID:**

  ```
  DELETE http://localhost:3000/register/api/v1/delete/1
  ```

### Exemplo de Uso

```bash
# Salvar novo funcionário
curl -X POST -H "Content-Type: application/json" -d '{ "id": 1, "name": "João Silva", "salary": 3000, "position": "developer" }' http://localhost:3000/register/api/v1/save

# Listar todos os funcionários
curl http://localhost:3000/register/api/v1/list

# Buscar funcionários por ID
curl http://localhost:3000/register/api/v1/search/1

# Atualizar funcionários por ID
curl -X PUT -H "Content-Type: application/json" -d '{ "name": "João da Silva","salary": 5000, "position": "full stack" }' http://localhost:3000/register/api/v1/update/1

# Deletar funcionários por ID
curl -X DELETE http://localhost:3000/register/api/v1/delete/1
```

<hr>

## Proteção e Validação de Dados

Todos os dados foram tipados e validados utilizando algumas bibliotecas para auxiliar no trabalho do `NestJS`.

Instale

```bash
npm install class-transformer
```

---

```bash
npm install class-validator
```

---

```bash
npm install @nestjs/mapped-types
```

Aplicando as Validações

- O `class-validator` e o `class-transformer` ajuda no auxilio das tipagens dos dados na hora de passar os arquivos do DTO para o `json` na requisição, mostrando qual o tipo da variavél.

```typescript
import { IsNumber, IsString } from 'class-validator';

export class UserCreate {
  readonly id: number;
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly salary: number;
  @IsString()
  readonly position: string;
}
```

- Já na classe de atualização onde passar os parametros do `update`, utilizamos parcialmente os mesmos dados do `user-create` fazendo com que utilizando como herança os mesmos recursos, só que parcialmente, porque voce pode utilizar todos os dados ou não, um exemplo é o `id`.

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { UserCreate } from './user-create';
export class UserUpdate extends PartialType(UserCreate) {}
// não precisa colocar mais nada que os dados são abstraidos.
```

- Essa validação de dados auxilia na proteção de requisições e validação dos dados, porque se o DTO for do tipo number, mesmo que no `json` passe string, ele irá tipar automaticamente pada `number`.

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Anula corpos na requisição que é indevido
      forbidNonWhitelisted: true, // recusa requisições indevidas/400 bad request
      transform: true, // valida a tipagem da requisição
    }),
  ); // Validação de dados
  await app.listen(3000);
}
bootstrap();
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
