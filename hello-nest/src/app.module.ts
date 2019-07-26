import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';

import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // see https://docs.nestjs.com/middleware
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
