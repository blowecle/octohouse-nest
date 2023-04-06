import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';
import { AuthService } from './auth.service';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //Create a new repository for Users
  controllers: [UsersController],
  providers: [UsersService, AuthService, CurrentUserInterceptor
  //   {
  //   provide: APP_INTERCEPTOR, //globally scoped interceptor
  //   useClass: CurrentUserInterceptor
  // }
],
})
export class UsersModule {}
