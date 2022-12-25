import { Injectable } from '@nestjs/common';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  caluclateSummary() {
    const allExpense = this.reportService
      .getAllReports('expense')
      .reduce((sum, report) => sum + report.amount, 0);
    const allIncome = this.reportService
      .getAllReports('income')
      .reduce((sum, report) => sum + report.amount, 0);

    return {
      allExpense,
      allIncome,
      netIncome: allExpense - allIncome,
    };
  }
}
