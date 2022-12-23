import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

// Create endpoints
@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getAllReports(@Param('type') type: ReportType) {
    return this.appService.getAllReports(type);
  }
  @Get(':id')
  getReportById(@Param('type') type: ReportType, @Param('id') id: string) {
    return this.appService.getReportById(type, id);
  }

  @Post()
  CreateReport(
    @Body() { amount, source }: { amount: number; source: string },
    @Param('type') type: ReportType,
  ) {
    return this.appService.createReport(type, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Param('type') type: ReportType,
    @Param('id') id: string,
    @Body() body: ReportBody,
  ) {
    return this.appService.updateReport(type, id, body);
  }

  @Delete(':id')
  DeleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id);
  }
}

// Bussiness should be outside of the controller
// Validation is necessary
