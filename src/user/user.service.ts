// user.service.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './user.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(userDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

