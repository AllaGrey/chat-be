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
  avatar: string;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: Types.ObjectId;
}

export interface IChat {
  id: string;
  users: string[];
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
  avatar: string;
};

export type UpdateData = {
  name: string;
  surname: string;
  avatar: string;
};
