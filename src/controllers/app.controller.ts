import {
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Res,
  UseFilters,
} from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Response } from 'express';
import { ForbiddenExceptionFilter } from 'src/exceptions/filters/forbidden.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return { message: this.appService.getHello() };
  }

  @Get('pass-through')
  usingPassthourgh(@Res({ passthrough: true }) res: Response): string {
    res.setHeader('X-Custom-Header', 'Custom value');
    return 'Done';
  }

  @Get('throw-error')
  @UseFilters(new ForbiddenExceptionFilter())
  throwError(): string {
    throw new ForbiddenException("You don't have access to this resource", {
      description: 'This is a custom description',
    });
  }

  @Get('throw-error-all')
  throwErrorAll(): string {
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
