import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { User } from './user.model';
import { Controller } from '@nestjs/common';
import { DeleteUserDTO, UpdateUserDTO, CreateUserDTO, FindUserDTO } from './user.dto';

@Resolver(() => User)
export class UserResolver {
    constructor(private userService: UsersService) { }


    @Query(() => [User])
    async getUsers() {
        return this.userService.getUsers();
    }

    @Query(() => [User])
    async clearUsers() {
        //console.log(input);
        return this.userService.clearUser();
    }

    @Mutation(() => User)
    async findUser(@Args('input') input: FindUserDTO) {
        //console.log(input);
        return this.userService.findOneUser(input);
    }

    @Mutation(() => User)
    async createUser(@Args('input') input: CreateUserDTO) {
        //console.log(input);
        return this.userService.insertUser(input);
    }

    @Mutation(() => User)
    async deleteUser(@Args('input') input: DeleteUserDTO) {
        //console.log(input);
        return this.userService.deleteUser(input)
    }

    @Mutation(() => User)
    async updateUser(@Args('input') input: UpdateUserDTO) {
        //console.log(input);
        return this.userService.updateUser(input);
    }



}