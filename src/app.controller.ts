import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    return 'hello world';
  }

  @Get('/seed/confirm')
  async getSeed(): Promise<any> {
    await this.appService.seed();
    return 'seed complete';
  }
}
