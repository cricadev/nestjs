import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove all properties that are not in DTO
      forbidNonWhitelisted: true, // throw an error if a property is not in DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
