import { Controller, Get, Res } from '@nestjs/common';
import { CheckerService } from '../checker/checker.service';

@Controller('redirection')
export class RedirectionController {
  constructor(private checkerService: CheckerService) {
  }

  @Get()
  async redirection(@Res() res) {
    const result: boolean = await this.checkerService.problemIsSolved()
    if (result)
      return res.redirect('https://www.youtube.com/');
    else
      return res.redirect('https://codewars-blocking-cat.herokuapp.com/');
  }
}
