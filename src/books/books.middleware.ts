
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class BookMiddlewareOne implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('This is books middleware one');
    next();
  }
}

@Injectable()
export class BookMiddlewareTwo implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('This is books middleware two');
    next();
  }
}
