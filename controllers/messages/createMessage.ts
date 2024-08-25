import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { Chat, Message } from '../../models';

const createMessage = async (req: Request, res: Response): Promise<void> => {
  const { text, chat } = req.body;
  const currentUser = '66c99faf1d874074cf2e4344';

  const message = await Message.create({
    text,
    chat,
    user: currentUser,
  });

  console.log(message);

  res.status(201).json(message);
};

export const createMessageCtrl = ctrlWrapper(createMessage);
