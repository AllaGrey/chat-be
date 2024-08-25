import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { Chat } from '../../models';

const getAllUserChats = async (req: Request, res: Response): Promise<void> => {
  const currentUser = '66c99faf1d874074cf2e4344';

  const userChats = await Chat.find({ users: currentUser });
  console.log(userChats);

  res.status(200).json(userChats);
};

export const getAllUserChatsCtrl = ctrlWrapper(getAllUserChats);
