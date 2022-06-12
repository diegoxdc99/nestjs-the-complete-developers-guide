import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BulkCreateMessageDto } from './dtos/bulk-create-message.dto';
import { CreatemessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private service: MessagesService) {}

  @Get()
  async listMesages() {
    const data = await this.service.getData();
    console.log(data);
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
