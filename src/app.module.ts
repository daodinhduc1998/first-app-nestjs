import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module'

import { join } from 'path';


@Module({
  imports: [UsersModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/nest-demo',
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
