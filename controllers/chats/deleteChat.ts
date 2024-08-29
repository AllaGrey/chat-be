import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { Chat } from '../../models';

const deleteChat = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  await Chat.findOneAndDelete({
    _id: id,
  });

  res.status(200).json('chat was successfully deleted');
};

export const deleteChatCtrl = ctrlWrapper(deleteChat);
