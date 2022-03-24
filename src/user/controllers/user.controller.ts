import { Controller, Get, Delete, Req, Post, Put, HttpCode, Header, Redirect, Param, Query, Body } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, ListAllEntities } from '../dto'
import { Request } from 'express';
import { UsersService } from '../service/user.service';
import { User } from '../interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
        //return 'This action adds a new User: ' + createUserDto.username;
    }

    @Get('all')
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    // @Get()
    // findAll(@Query() query: ListAllEntities) {
    //     return `This action returns all User ${query.username} (limit: ${query.limit} )`;
    // }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} user`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user: `;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} user`;
    }

    // @Get(':id')
    // findOne(@Param('id') id: string): string {
    //     console.log(id);
    //     return `This action returns a #${id} user`;
    //     //return 'This action returns all users';
    // }
    // @Get()
    // async findAll(): Promise<any[]> {
    //     return [];
    // }
    // @Get('get/:id')
    // find(@Param('id') id: string): string {
    //     console.log(id);
    //     return `This action returns a #${id} user1`;
    //     //return 'This action returns all users';
    // }

}
