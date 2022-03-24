import { Module, Global } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UsersService } from './service/user.service';

@Global()
@Module({
    controllers: [UserController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule { }