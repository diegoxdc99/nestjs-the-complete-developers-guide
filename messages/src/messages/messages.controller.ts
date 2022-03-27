import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMesages() {
    return 'hola';
  }

  @Post()
  createMessages(@Body() message) {
    return message;
  }

  @Get(':id')
  getMessage(@Param('id') id) {
    return `Id: ${id}`;
  }
}
