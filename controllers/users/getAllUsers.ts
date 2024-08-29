import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { getAllUsers } from '../../services';

const getUsers = async (req: Request, res: Response): Promise<void> => {
  const currentUserId = res.locals.user._id.toString();

  const users = await getAllUsers();

  const usersWithoutCurrent = users.filter(user => user.id !== currentUserId);

  res.status(200).json(usersWithoutCurrent);
};

export const getAllUsersCtrl = ctrlWrapper(getUsers);
