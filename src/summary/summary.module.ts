import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';
import { ReportService } from 'src/report/report.service';
@Module({
  imports: [ReportService],
  controllers: [SummaryController],
  providers: [SummaryService],
})
export class SummaryModule {}
