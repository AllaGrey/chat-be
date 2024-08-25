import { Types } from 'mongoose';

export interface IHttpError extends Error {
  status?: number;
}

export interface IUser {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  access_token?: string;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: Types.ObjectId;
}

export interface IChat {
  id: string;
  users: string[];
  messages: IMessage[];
  createdAt?: Date;
  updatedAt?: Date;
  _id?: Types.ObjectId;
}

export interface IMessage {
  id: string;
  text: string;
  chat: string;
  user: string;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: Types.ObjectId;
}

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
