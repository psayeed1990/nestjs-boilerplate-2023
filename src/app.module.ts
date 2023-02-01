import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestService } from './request.service';
import * as redisStore from 'cache-manager-redis-store';
import type { ClientOpts } from 'redis';

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      socket: {
        host: 'localhost',
        port: 6379,
      },
      ttl: 60,
      max: 1000,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RequestService],
})
export class AppModule {}
