import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';

@Module({
    imports: [DatabaseModule],
    providers: [UserResolver, UsersService, ...userProviders],
})
export class UserModule { }