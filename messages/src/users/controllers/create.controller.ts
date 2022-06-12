import { Controller, Post } from '@nestjs/common';
import { AnimeService } from '../services/anime.service';

@Controller('users')
export class CreateController {
  constructor(private readonly animeService: AnimeService) {}
  @Post()
  async create() {
    console.log(await this.animeService.getData());
    return 'hola';
  }
}
