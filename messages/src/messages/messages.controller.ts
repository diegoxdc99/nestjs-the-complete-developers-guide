import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BulkCreateMessageDto } from './dtos/bulk-create-message.dto';
import { CreatemessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMesages() {
    return 'hola';
  }

  @Post()
  createMessages(@Body() message: CreatemessageDto) {
    return message;
  }

  @Post('bulk')
  BulkCreateMessages(@Body() messages: BulkCreateMessageDto) {
    return messages;
  }

  @Get(':id')
  getMessage(@Param('id') id: number) {
    const type = typeof id;
    return `Id: ${type}`;
  }
}
