import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDTO {
    @Field({ nullable: false })
    username: string
    @Field({ nullable: false })
    password: string
    @Field({ nullable: false })
    email: string
    @Field({ nullable: true })
    avatar?: string
}

@InputType()
export class UpdateUserDTO {
    @Field({ nullable: false })
    username: string

    @Field({ nullable: true })
    password?: string

    @Field({ nullable: true })
    email?: string

    @Field({ nullable: true })
    avatar?: string
}

@InputType()
export class DeleteUserDTO {
    @Field({ nullable: false })
    username: string
}

@InputType()
export class FindUserDTO {
    @Field({ nullable: false })
    username: string
}


