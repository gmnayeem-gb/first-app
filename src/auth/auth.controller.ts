import { AuthGuard } from '@nestjs/passport';
import { Controller, Post, UseGuards, Req, Get } from '@nestjs/common';

import { roleContants } from './constants';
import { AuthService } from './auth.service';
import { RoleGuard } from './guards/role.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  @UseGuards(AuthGuard('local')) // verify user authentication
  login(@Req() req): any {
    return this.authService.login(req.user); 
  }

  @Get('/user-profile')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(roleContants.USER)) // verify JWT token
  getUserProfile(@Req() req) :any {
    return {
      success: true,
      message: 'User profile has been retrieved',
      data: req.user
    }
  }

  @Get('/admin-profile')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(roleContants.ADMIN)) // verify JWT token
  getAdminProfile(@Req() req) :any {
    return {
      success: true,
      message: 'Admin Profile has been retrieved',
      data: req.user
    }
  }
}
