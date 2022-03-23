import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Param, Query } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
    @Get(':id')
    findOne(@Param('id') id: string): string {
        console.log(id);
        return `This action returns a #${id} user`;
        //return 'This action returns all users';
    }

    @Get('get/:id')
    find(@Param('id') id: string): string {
        console.log(id);
        return `This action returns a #${id} user1`;
        //return 'This action returns all users';
    }

    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }

    @Post()
    @HttpCode(204)
    //@Header('Cache-Control', 'none')
    //@Redirect('https://docs.nestjs.com', 302)
    create(): string {
        return 'This action adds a new users';
    }

}
