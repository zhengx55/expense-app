import { Controller } from '@nestjs/common';

// Create endpoints
@Controller('report/:type')
export class AppController {}

// Bussiness should be outside of the controller
// Validation is necessary
