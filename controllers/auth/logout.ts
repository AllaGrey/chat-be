import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { User } from '../../models';

const logout = async (req: Request, res: Response): Promise<void> => {
  const { user } = res.locals;

  // const user = await User.findOne({ email: userData.email }).select({
  //   password: userData.password,
  // });

  console.log(user);

  res.status(200).json(user);
};

export const logoutCtrl = ctrlWrapper(logout);
