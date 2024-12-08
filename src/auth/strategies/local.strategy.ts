import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { User } from 'src/users/entity/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super();
  }

  validate(username: string, pass: string): any {
    const user: User = this.usersService.getUserByUsername(username);

    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }

    const {password, ...others} = user;

    return others;
  }
}
