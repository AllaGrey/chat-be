import { NextFunction, Request, Response } from 'express';
import { User } from '../models';
import { updateUserDataValidation } from '../services/users';
import { HttpError } from '../utils';

export const updateUserValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, surname, avatar } = req.body;
  const id = res.locals.user._id;

  const { error } = updateUserDataValidation({ name, surname, avatar });

  if (error) return next(HttpError(400, `${error.message}`));

  const newUser = await User.findByIdAndUpdate(id, { name, surname, avatar });

  console.log(newUser);

  res.locals.newUser = newUser;

  next();
};
