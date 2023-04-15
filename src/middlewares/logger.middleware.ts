/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  reqCount = 0;
  resCount = 0;
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request number: ' + ++this.reqCount);
    next();
    console.log('Response number: ' + ++this.resCount);
  }
}
