import { Request, Response } from 'express';
import { HttpError, ctrlWrapper } from '../../utils';
import { Chat, Message } from '../../models';
import { publishMessage } from '../../services';
import { IMessage } from '../../types';
import { Document } from 'mongoose';

const createMessage = async (req: Request, res: Response): Promise<void> => {
  const { text, chat } = req.body;
  const { _id: currentUser } = res.locals.user;

  const message = await Message.create({
    text,
    chat,
    user: currentUser,
  });

  console.log(message);

  if (!message) throw HttpError(500, 'Internal Server Error');

  const publishedMessage = await publishMessage(message);

  res.status(201).json(message);
};

export const createMessageCtrl = ctrlWrapper(createMessage);
