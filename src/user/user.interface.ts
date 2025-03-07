// user.interface.ts
import { ObjectId } from 'mongodb';
  
export interface User {
  _id?: ObjectId;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  createdAt?: Date;
}
