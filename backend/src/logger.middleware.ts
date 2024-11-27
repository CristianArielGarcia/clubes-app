import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware {
  use(req, res, next) {
    console.log(`Request ${req}`);
    console.log(`Response ${res}`);
    next();
  }
}
