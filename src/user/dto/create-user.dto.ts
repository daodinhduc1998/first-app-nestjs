import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    username: string;
    email: string;
    avatar: string;
}