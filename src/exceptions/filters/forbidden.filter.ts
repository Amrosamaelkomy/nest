/* eslint-disable prettier/prettier */
import { Catch, ExceptionFilter, ForbiddenException } from '@nestjs/common';
import * as moment from 'moment';

@Catch(ForbiddenException)
export class ForbiddenExceptionFilter implements ExceptionFilter {
  catch(exception: ForbiddenException, host: any) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      path: request.url,
    });
  }
}
