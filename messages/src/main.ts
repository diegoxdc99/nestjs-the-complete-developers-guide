import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModuleModule } from './app-module.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModuleModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
