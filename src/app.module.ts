import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [SummaryModule, ReportModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      // request or response interceptor
      provide: APP_INTERCEPTOR,
      // modifiy the response base on the dto
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
