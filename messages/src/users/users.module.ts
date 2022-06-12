import { AxiosInterceptorService } from '@app/messages/axios-interceptor.service';
import { SharedModule } from '@app/shared/shared.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CreateController } from './controllers/create.controller';
import { AnimeService } from './services/anime.service';

@Module({
  imports: [SharedModule],
  controllers: [CreateController],
  providers: [AnimeService],
})
export class UsersModule {}
