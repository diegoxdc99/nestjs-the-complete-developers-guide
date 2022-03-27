import { Type } from 'class-transformer';
import { ArrayNotEmpty, ValidateNested } from 'class-validator';
import { CreatemessageDto } from './create-message.dto';

export class BulkCreateMessageDto {
  @ValidateNested({ each: true })
  @Type(() => CreatemessageDto)
  @ArrayNotEmpty()
  messages: CreatemessageDto[];
}
