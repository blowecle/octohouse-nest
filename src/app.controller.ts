import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/seed/confirm')
  async getHello(): Promise<any> {
    await this.appService.seed();
    return 'seed complete';
  }
}
