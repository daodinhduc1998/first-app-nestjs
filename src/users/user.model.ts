import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
});

export interface User extends mongoose.Document {
    id: string;
    username: string;
    email: string;
    avatar: string;
}