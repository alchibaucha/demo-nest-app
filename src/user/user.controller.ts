// user.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPresenter } from './user.presenter';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userPresenter: UserPresenter
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return this.userPresenter.present(user);
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users.map(user => this.userPresenter.present(user));
  }
}