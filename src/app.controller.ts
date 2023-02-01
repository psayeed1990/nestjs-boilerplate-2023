import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @CacheKey('soume_route')
  @CacheTTL(60)
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
