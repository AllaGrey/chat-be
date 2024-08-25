import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { User } from '../../models';

const register = async (req: Request, res: Response): Promise<void> => {
  const { name, surname, email, password, access_token } = req.body;

  const user = await User.create({
    name,
    surname,
    email,
    password,
    access_token,
  });

  res.status(201).json(user);
};

export const registerCtrl = ctrlWrapper(register);
