import bcrypt from 'bcrypt';

export const comparePassword = async (password: string, dbPassword: string) => {
  const match = await bcrypt.compare(password, dbPassword);

  return match;
};
