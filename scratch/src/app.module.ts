import { Module } from '@nestjs/common';
import { AppController } from './app.controler';

@Module({
  controllers: [AppController], //instantiate all controllers listed here.
})
export class AppModule {}
