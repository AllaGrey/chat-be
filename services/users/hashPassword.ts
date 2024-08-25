import bcrypt from 'bcrypt';
import { HttpError } from '../../utils';

export const hashPassword = async (password: string) => {
  const { SALT } = process.env;
  if (!SALT) return HttpError(500, 'Invalid environment');

  const hashedPassword = await bcrypt.hash(password, parseInt(SALT));

  return hashedPassword;
};
