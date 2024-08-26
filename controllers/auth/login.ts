import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { User } from '../../models';

const login = async (req: Request, res: Response): Promise<void> => {
  const { _id, name, surname, email } = res.locals.user;
  const { new_access_token } = res.locals;

  await User.findByIdAndUpdate(_id, { access_token: new_access_token });

  res.status(200).json({
    id: _id,
    name,
    surname,
    email,
    access_token: new_access_token,
  });
};

export const loginCtrl = ctrlWrapper(login);
