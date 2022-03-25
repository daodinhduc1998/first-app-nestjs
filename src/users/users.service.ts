import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UsersSevice {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) { }

    async insertUser(username: string, email: string, avatar: string) {
        const newUser = new this.userModel({ username, email, avatar, })
        const result = await newUser.save();
        return result.id as string;
    }

    async getUsers() {
        const users = await this.userModel
            .find()
            .exec();
        return users.map(user => ({
            id: user.id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
        }));
    }
}