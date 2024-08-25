import { NextFunction, Request, Response } from 'express';
import { User } from '../../models';
import { HttpError } from '../../utils';
import {
  createToken,
  hashPassword,
  registerDataValidation,
} from '../../services';

export const registerValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, surname, email, password } = req.body;
  console.log(password);

  const { error } = registerDataValidation({ name, surname, email, password });
  if (error) return next(HttpError(400, `${error.message}`));

  const user = await User.findOne({ email });

  if (user) return next(HttpError(400, 'Email in use'));

  const hashedPassword = await hashPassword(password);

  const access_token = createToken(email);

  req.body = { name, surname, email, password: hashedPassword, access_token };

  next();
};
