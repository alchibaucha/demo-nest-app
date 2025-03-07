// user.presenter.spec.ts
import { UserPresenter } from './user.presenter';
import { User } from './user.interface';

describe('UserPresenter', () => {
  let userPresenter: UserPresenter;

  beforeEach(() => {
    userPresenter = new UserPresenter();
  });

  it('should return full name correctly', () => {
    const user: User = {
      firstName: 'John',
      middleName: 'A.',
      lastName: 'Doe',
      email: 'john@example.com',
    };
    expect(userPresenter.getFullName(user)).toBe('John A. Doe');
  });

  it('should handle missing middle name', () => {
    const user: User = {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
    };
    expect(userPresenter.getFullName(user)).toBe('Jane Doe');
  });
});
