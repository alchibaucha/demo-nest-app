// user.presenter.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserPresenter {
  present(user: User) {
    return {
      _id: user._id,
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      email: user.email,
      fullName: this.getFullName(user),
      createdAt: user.createdAt,
    };
  }

  getFullName(user: User): string {
    return [user.firstName, user.middleName, user.lastName].filter(Boolean).join(' ');
  }
}

