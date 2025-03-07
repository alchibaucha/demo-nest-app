// user.repository.ts
import { Injectable, Inject } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { CreateUserDto } from './user.dto';
import { User } from './user.interface';

@Injectable()
export class UserRepository {
  constructor(@Inject('DATABASE_CONNECTION') private readonly db: Db) {}

  private get collection() {
    return this.db.collection<User>('users');
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const result = await this.collection.insertOne({ ...userDto, createdAt: new Date() });
    return { _id: result.insertedId, ...userDto, createdAt: new Date() };
  }

  async findAll(): Promise<User[]> {
    return this.collection.find().toArray();
  }
}

