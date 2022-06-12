import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { AxiosInterceptorService } from './axios-interceptor.service';
import { SharedModule } from '@app/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
