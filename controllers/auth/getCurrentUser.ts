import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';

const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
  const { _id: id, name, surname, email, access_token } = res.locals.user;
  const { new_access_token } = res.locals;

  res.status(200).json({
    id,
    name,
    surname,
    email,
    access_token,
  });
};

export const getCurrentUserCtrl = ctrlWrapper(getCurrentUser);
