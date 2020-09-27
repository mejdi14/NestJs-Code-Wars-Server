import { HttpService, Injectable } from '@nestjs/common';
import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CodeWarsData } from './data';

@Injectable()
export class CheckerService {
  constructor(private connexion: HttpService) {
  }

  async problemIsSolved(): Promise<boolean> {
    const data = await this.connexion.get('https://www.codewars.com/api/v1/users/mejdi/code-challenges/completed').pipe(
      map(response => response.data.data[0].completedAt));
    if (!data)
      return this.checkIfLastDateIsToday(data)
    else
    return false
  }

  private checkIfLastDateIsToday(data: any) {
    const inputDate = new Date(data);
    const todaysDate = new Date();
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0))

  }
}