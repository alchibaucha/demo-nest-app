// user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserPresenter } from './user.presenter';

@Module({
  providers: [UserService, UserRepository, UserPresenter],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
