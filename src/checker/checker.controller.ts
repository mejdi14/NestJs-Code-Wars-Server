import { Controller, Get, Res } from '@nestjs/common';
import { CheckerService } from './checker.service';
import { Observable } from 'rxjs';
import { CodeWarsData } from './data';

@Controller('checker')
export class CheckerController {
  constructor(private checkerService: CheckerService){
  }
  @Get()
  findAll(): Promise<boolean> {
    return this.checkerService.problemIsSolved()
  }

}
