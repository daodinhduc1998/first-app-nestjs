
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

require('dotenv').config()
import { databaseProviders } from './database/database.provider';
import { DatabaseModule } from './database/database.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './users/users.module'
import { UsersService } from './users/users.service';
import { UserResolver } from './users/user.resolver';
import { userProviders } from './users/user.providers';
//import { UsersController } from './users/users.controller';



@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UsersService,
    UserResolver,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class AppModule { }
