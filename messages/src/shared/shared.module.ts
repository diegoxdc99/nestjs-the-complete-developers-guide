import { AxiosInterceptorService } from '@app/messages/axios-interceptor.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  providers: [AxiosInterceptorService],
  exports: [HttpModule],
})
export class SharedModule {}
