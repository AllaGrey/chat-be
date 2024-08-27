import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { getUserChatsWithDetails } from '../../services';

const getAllUserChats = async (req: Request, res: Response): Promise<void> => {
  const { _id: currentUserId } = res.locals.user;

  const chatsWithDetails = await getUserChatsWithDetails(currentUserId);

  res.status(200).json(chatsWithDetails);
};

export const getAllUserChatsCtrl = ctrlWrapper(getAllUserChats);
