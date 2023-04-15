import { Module, NestModule } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AllController } from './controllers/all.controller';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, AllController],
  providers: [AppService, LoggerMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: any) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
