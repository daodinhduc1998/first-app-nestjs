import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService {
    private readonly Users: User[] = [];

    create(user: User) {
        this.Users.push(user);
    }

    findAll(): User[] {
        return this.Users;
    }
}
