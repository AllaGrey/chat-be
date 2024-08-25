import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';

const login = async (req: Request, res: Response): Promise<void> => {
  const { _id: id, name, surname, email } = res.locals.user;
  const { new_access_token } = res.locals;

  res.status(200).json({
    id,
    name,
    surname,
    email,
    access_token: new_access_token,
  });
};

export const loginCtrl = ctrlWrapper(login);
