import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

import { User } from 'src/users/entity/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  generateToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  login(user: User): any {
    const { username, email, role } = user;

    const token = this.generateToken({
      username,
      email,
      role
    });

    return {
      success: true,
      message: 'Login successful',
      data: {
        token,
        user,
      },
    };
  }
}
