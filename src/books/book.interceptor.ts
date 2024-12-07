/**
 * interceptor adding behavior to existing code without modifying the code
 * it could be used both controller and it's methods, also it could be used globally 
 */

import { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';

@Injectable()
export class BookInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    request.body.published = 2000;

    return next.handle().pipe(map((data) => {
        return {...data, statusCode: 201};
    }));
  }
}
