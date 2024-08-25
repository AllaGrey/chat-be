import { NextFunction, Request, Response } from 'express';
import { User } from '../../models';
import { HttpError } from '../../utils';
import {
  comparePassword,
  createToken,
  loginDataValidation,
} from '../../services';
import { IUser } from '../../types';

export const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const { error } = loginDataValidation({ email, password });
  if (error) next(HttpError(400, `${error.message}`));

  const user: IUser | null = await User.findOne({ email });

  if (!user) return next(HttpError(401, 'Email or password is incorrect'));

  const isValidPassword = await comparePassword(password, user.password);

  if (!isValidPassword) throw HttpError(401, 'Email or password is incorrect');

  const access_token = createToken(email);

  res.locals = { user, new_access_token: access_token };

  next();
};
