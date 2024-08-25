import { NextFunction, Request, Response } from 'express';
import { User } from '../../models';
import { HttpError } from '../../utils';
import { loginDataValidation } from '../../services/users/loginDataValidation';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const { error } = loginDataValidation({ email, password });
  if (error) throw HttpError(400, `${error.message}`);

  const user = await User.findOne({ email }).select({
    password,
  });

  console.log(req.body);

  console.log(user);
  const isValidPassword = true;

  if (!isValidPassword) throw HttpError(401, 'Email or password is wrong');

  // Add authentication logic here
  next();
};
