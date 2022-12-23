import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { data } from './data';
import { v4 as uuid } from 'uuid';

// Create endpoints
@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports(@Param('type') type: string) {
    return data.report.filter((report) => {
      return report.type === type;
    });
  }
  @Get(':id')
  getIncomeReportById(@Param('type') type: string, @Param('id') id: string) {
    const TYPE = type === 'income' ? 'income' : 'expense';
    return data.report
      .filter((report) => report.type === TYPE)
      .find((report) => report.id === id);
  }

  @Post()
  CreateReport(
    @Body() body: { amount: number; source: string },
    @Param('type') type: 'income' | 'expense',
  ) {
    const newReport = {
      id: uuid(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return '';
  }

  @Put(':id')
  updateReport(
    @Param('type') type: 'income' | 'expense',
    @Param('id') id: string,
    @Body() body: { amount: number; source: string },
  ) {
    const TYPE = type === 'income' ? 'income' : 'expense';
    const finded = data.report
      .filter((report) => report.type === TYPE)
      .find((report) => report.id === id);

    if (!finded) return;

    const reportIndex = data.report.findIndex((report) => report.id === id);
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
    };
    return data.report[reportIndex];
  }

  @Delete(':id')
  DeleteReport(@Param('id') id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}
