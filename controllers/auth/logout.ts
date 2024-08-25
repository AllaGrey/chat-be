import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { User } from '../../models';

const logout = async (req: Request, res: Response): Promise<void> => {
  const { user } = res.locals;

  await User.findByIdAndUpdate({ _id: user.id }, { access_token: '' });

  res.status(200).json('Logged out successfully');
};

export const logoutCtrl = ctrlWrapper(logout);
