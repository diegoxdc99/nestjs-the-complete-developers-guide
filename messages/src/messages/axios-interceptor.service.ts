import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AxiosInterceptorService implements OnModuleInit, OnModuleDestroy {
  private interceptorRequest: number;
  private interceptorResponse: number;

  constructor(private readonly httpService: HttpService) {}

  onModuleInit() {
    this.interceptorRequest = this.interceptorRequest = this.httpService.axiosRef.interceptors.request.use(this.logRequest());
    console.log(this.interceptorRequest);
  }
  onModuleDestroy() {
    console.log('destruyendo el interceptor');
    this.httpService.axiosRef.interceptors.request.eject(this.interceptorRequest);
  }

  private logRequest() {
    return (config) => {
      console.log('Usando servicio con url', config.url);
      return config;
    };
  }
}
