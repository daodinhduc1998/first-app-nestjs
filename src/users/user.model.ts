import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
});

@ObjectType()
export class User extends Document {
    @Field()
    username: string;

    @Field({ nullable: true })
    password: string;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    avatar: string;
}

