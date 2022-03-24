import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './user/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
