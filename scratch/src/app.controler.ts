import { Controller, Get } from '@nestjs/common';

@Controller('root')
export class AppController {
  @Get('/hello')
  getHelloWorld() {
    return 'Hi there!';
  }

  @Get('/bye')
  getByeoWorld() {
    return 'bye there!';
  }
}
