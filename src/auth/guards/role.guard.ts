import { Request } from 'express';
import { Observable } from 'rxjs';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  private rolePassed: string;

  constructor(role:string) {
    this.rolePassed = role;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request:any = context.switchToHttp().getRequest<Request>();

    return this.rolePassed === request.user.role;
  }
}
