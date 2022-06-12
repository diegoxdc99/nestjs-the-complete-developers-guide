import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class AnimeService {
  constructor(private httpService: HttpService) {}

  getData() {
    return firstValueFrom(this.httpService.get('https://animechan.vercel.app/api/random').pipe(map((data) => data.data)));
  }
}
