import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(body: any): string {
    return `Hello ${body.name}!`;
  }
}
