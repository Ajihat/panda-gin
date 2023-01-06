import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = {
  userId: number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[];
  constructor() {
    this.createDefaultUsers();
  }

  private async createDefaultUsers() {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash('admin', salt);

    const admin = {
      userId: 1,
      firstname: 'Adam',
      lastname: 'Falek',
      username: 'admin@admin.com',
      password,
    };

    this.users = [admin];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(userData: any): Promise<any> {
    if (await this.findOne(userData.username)) {
      throw new BadRequestException();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    const userId = Date.now();

    this.users.push({
      userId: userId,
      firstname: userData.firstname,
      lastname: userData.lastname,
      username: userData.username,
      password: hashedPassword,
    });

    return true;
  }
}
