import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';

const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { _id: id, name, surname, access_token, avatar } = res.locals.newUser;

  res.status(200).json({
    id,
    name,
    surname,
    access_token,
    avatar,
  });
};

export const updateUserCtrl = ctrlWrapper(updateUser);
