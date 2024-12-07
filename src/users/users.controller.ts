
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

//   @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

//   @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

