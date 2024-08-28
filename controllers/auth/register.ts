import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { User } from '../../models';
import { createUser } from '../../services';

const register = async (req: Request, res: Response): Promise<void> => {
  const { name, surname, email, password, access_token, avatar } = req.body;

  const user = await createUser({
    name,
    surname,
    email,
    password,
    access_token,
    avatar,
  });

  res.status(201).json(user);
};

export const registerCtrl = ctrlWrapper(register);
