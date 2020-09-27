import { HttpService, Injectable } from '@nestjs/common';
import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class CheckerService {
  constructor(private connexion: HttpService) {
  }
  create() {
    const data = this.connexion.get('https://www.codewars.com/api/v1/users/mejdi/code-challenges/completed?page=0').pipe(
      map(response => response.data.data));
    return data
  }
}
