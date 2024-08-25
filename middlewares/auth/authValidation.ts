import { NextFunction, Request, Response } from 'express';
import { User } from '../../models';
import jwt from 'jsonwebtoken';
import { HttpError } from '../../utils';
import { IUser } from '../../types';

export const authValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const { JWT_SECRET } = process.env;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(HttpError(401, 'Authorization token is missing or invalid'));
  }

  const token = authorization.split(' ')[1];

  if (!JWT_SECRET) return next(HttpError(500, 'Invalid environment'));

  const decoded = jwt.verify(token, JWT_SECRET) as { data: string };

  const user: IUser | null = await User.findOne({ email: decoded.data });

  if (!user) {
    return next(HttpError(401, 'User not found'));
  }

  res.locals.user = user;

  next();
};
