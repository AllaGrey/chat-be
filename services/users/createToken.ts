import jwt from 'jsonwebtoken';
import { HttpError } from '../../utils';

export const createToken = (userId: string): string => {
  const { JWT_SECRET, JWT_ACCESS_EXPIRES } = process.env;

  if (!JWT_SECRET || !JWT_ACCESS_EXPIRES)
    throw HttpError(500, 'Invalid environment');

  const token = jwt.sign({ data: userId }, JWT_SECRET, {
    expiresIn: JWT_ACCESS_EXPIRES,
  });

  return token;
};
