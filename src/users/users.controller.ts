// import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
// import { CreateUserDTO } from './dto/create.user';
// import { UsersService } from './users.service';

// @Controller('user')
// export class UsersController {
//     constructor(private readonly usersService: UsersService) { }

//     @Post('add')
//     async addUser(@Body() createUserDTO: CreateUserDTO) {
//         const generatedId = await this.usersService.insertUser(createUserDTO);
//         return { id: generatedId };
//     }

//     @Get()
//     async getAllUsers() {
//         const users = await this.usersService.getUsers();
//         return users;
//     }

// }