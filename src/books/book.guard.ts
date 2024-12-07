
import { Request } from 'express';
import { Observable } from 'rxjs';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class BookGuard implements CanActivate {
    public key: string = 'test123';

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const value = request.header("key"); 
    
    if (value === undefined) return false;
    if (value !== this.key) return false;

    return true;
  }
}
