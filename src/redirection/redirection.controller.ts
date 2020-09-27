import { Controller, Res } from '@nestjs/common';
import { CheckerService } from '../checker/checker.service';

@Controller('redirection')
export class RedirectionController {
  constructor(private checkerService: CheckerService) {
  }

  async redirection(@Res() res) {
    const result: boolean = await this.checkerService.problemIsSolved()
    if (result)
      return res.redirect('https://www.youtube.com/watch?v=f9X1C7pTu-M');
  }
}
