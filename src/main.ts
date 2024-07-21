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
