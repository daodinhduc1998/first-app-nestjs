import { Injectable, NotFoundException, Inject, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

import { CreateUserDTO, UpdateUserDTO, DeleteUserDTO, FindUserDTO } from './user.dto';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_MODEL') private userModel: Model<User>) { }

    async getUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOneUser(findUserDTO: FindUserDTO): Promise<User> {
        return await this.userModel.findOne(findUserDTO).exec()
    }

    async insertUser(createUserDTO: CreateUserDTO): Promise<User> {
        //console.log(createUserDTO);
        const newUser = new this.userModel(createUserDTO)
        //console.log("test1: " + newUser);
        return newUser.save();
    }

    async updateUser(updateUserDTO: UpdateUserDTO): Promise<User> {
        const user: object = {}
        if (updateUserDTO.password) user['password'] = updateUserDTO.password
        if (updateUserDTO.avatar) user['avatar'] = updateUserDTO.avatar
        if (updateUserDTO.email) user['email'] = updateUserDTO.email
        return this.userModel.findOneAndUpdate({ username: updateUserDTO.username }, user)
    }

    async deleteUser(deleteUserDTO: DeleteUserDTO) {
        var status: object = {}
        return await this.userModel.deleteOne(deleteUserDTO).exec()
    }

    async clearUser() {
        var result = await this.userModel.remove({}).exec()
    }

}