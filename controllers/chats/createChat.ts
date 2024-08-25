import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { Chat } from '../../models';

const createChat = async (req: Request, res: Response): Promise<void> => {
  const { partner } = req.body;
  const currentUser = '66c99faf1d874074cf2e4344';

  const chat = await Chat.create({
    users: [currentUser, partner],
  });

  console.log(chat);

  res.status(201).json(chat);
};

export const createChatCtrl = ctrlWrapper(createChat);
