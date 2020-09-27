import { Controller, Get } from '@nestjs/common';
import { CheckerService } from './checker.service';

@Controller('checker')
export class CheckerController {
  constructor(private checkerService: CheckerService){
  }
  @Get()
  findAll(): any {
    return this.checkerService.create();
  }
}
