/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CatCreateDto, ListAllEntities } from 'src/models/cat.model';

@Controller('all')
export class AllController {
  @Post('/request')
  printRequest(
    @Req() request: Request,
    @Res() res: Response,
    @Body() body: CatCreateDto,
  ): any {
    res.status(HttpStatus.OK).send({
      message: 'This action returns the request object',
      content: {
        headers: request.headers,
        method: request.method,
        url: request.url,
        body: body,
      },
    });
  }

  @Get('/query')
  printQuery(
    @Req() request: Request,
    @Res() res: Response,
    @Query() query: ListAllEntities,
  ): any {
    res.status(HttpStatus.OK).send({
      message: 'This action returns the query object',
      content: {
        headers: request.headers,
        method: request.method,
        url: request.url,
        query: {
          limit: query.limit,
          offset: query.offset,
        },
      },
    });
  }

  @Get('/params/:id')
  printParams(
    @Req() request: Request,
    @Res() res: Response,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    params: number,
  ): any {
    res.status(HttpStatus.OK).send({
      message: 'This action returns the params object',
      content: {
        headers: request.headers,
        method: request.method,
        url: request.url,
        params: params,
      },
    });
  }
}
