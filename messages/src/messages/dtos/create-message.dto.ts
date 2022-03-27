import { IsNumber, IsString } from 'class-validator';

export class CreatemessageDto {
  @IsString()
  content: string;
  @IsNumber()
  age: number;
}
