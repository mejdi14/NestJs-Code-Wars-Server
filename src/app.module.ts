import { HttpModule, HttpService, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckerController } from './checker/checker.controller';
import { CheckerService } from './checker/checker.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CheckerController],
  providers: [AppService, CheckerService],
})
export class AppModule {}
