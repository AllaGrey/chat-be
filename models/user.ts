import { Schema, model } from 'mongoose';

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    surname: {
      type: String,
      required: [true, 'Surname is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    access_token: {
      type: String,
      required: [true, 'Access_token is required'],
    },
    avatar: {
      type: String,
      required: [true, 'Avatar is required'],
    },
  },
  { timestamps: true, versionKey: false }
);

export const User = model('User', userSchema);
