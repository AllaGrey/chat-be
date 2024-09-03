import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { Message } from '../../models';
import { getUserChatsWithDetails } from '../../services';

const updateChat = async (req: Request, res: Response): Promise<void> => {
  const { _id: currentUserId } = res.locals.user;
  const { id } = req.params;

  await Message.updateMany(
    { chat: id, readBy: { $ne: currentUserId } },
    { $addToSet: { readBy: currentUserId } }
  );

  const chatsWithDetails = await getUserChatsWithDetails(currentUserId);

  res.status(200).json(chatsWithDetails);
};

export const updateChatCtrl = ctrlWrapper(updateChat);
