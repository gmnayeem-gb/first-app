// it's for authentication

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {
  constructor() {
    console.log('hi, I am app module');
  }
}
