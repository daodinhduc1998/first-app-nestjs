import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';

import { UsersSevice } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersSevice) { }

    @Post('add')
    async addUser(
        @Body('username') userUsername: string,
        @Body('email') userEmail: string,
        @Body('avatar') userAvatar: string,
    ) {
        const generatedId = await this.usersService.insertUser(
            userUsername,
            userEmail,
            userAvatar,
        );
        return { id: generatedId };
    }

    @Get()
    async getAllUsers() {
        const users = await this.usersService.getUsers();
        return users;
    }

}