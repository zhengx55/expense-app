import {
  CreateReportDto,
  ReportResponseDto,
  UpdateReportDto,
} from '../dtos/report.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ReportService } from './report.service';

// Create endpoints
@Controller('report/:type')
export class ReportController {
  constructor(private readonly appService: ReportService) {}
  @Get()
  getAllReports(@Param('type') type: ReportType): ReportResponseDto[] {
    return this.appService.getAllReports(type);
  }
  @Get(':id')
  getReportById(
    @Param('type') type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.appService.getReportById(type, id);
  }

  @Post()
  CreateReport(
    @Body() { amount, source }: CreateReportDto,
    @Param('type') type: ReportType,
  ): ReportResponseDto {
    return this.appService.createReport(type, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Param('type') type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ReportResponseDto {
    return this.appService.updateReport(type, id, body);
  }

  @HttpCode(200)
  @Delete(':id')
  DeleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.deleteReport(id);
  }
}

// Bussiness should be outside of the controller
// Validation is necessary
