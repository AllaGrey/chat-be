import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { Chat, Message } from '../../models';

const getChatById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const messageList = await Message.find({ chat: id })
    .sort({ createdAt: 1 })
    .lean();

  res.status(200).json(messageList);
};

export const getChatByIdCtrl = ctrlWrapper(getChatById);
