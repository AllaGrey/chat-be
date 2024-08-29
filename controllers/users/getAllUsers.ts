import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { getAllUsers } from '../../services';

const getUsers = async (req: Request, res: Response): Promise<void> => {
  const { _id: id } = res.locals.user;

  const users = await getAllUsers();

  const usersWithoutCurrent = users.filter(user => user._id !== id);

  res.status(200).json(usersWithoutCurrent);
};

export const getAllUsersCtrl = ctrlWrapper(getUsers);
