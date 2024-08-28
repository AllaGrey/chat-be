import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { createChatWithUpdateUsers } from '../../services';

const createChat = async (req: Request, res: Response): Promise<void> => {
  const { partner } = req.query;
  const { _id: currentUser } = res.locals.user;

  const chat = await createChatWithUpdateUsers(currentUser, partner as string);

  res.status(201).json(chat);
};

export const createChatCtrl = ctrlWrapper(createChat);
