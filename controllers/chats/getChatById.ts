import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { Chat } from '../../models';

const getChatById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const result = await Chat.findById(id);
  console.log(result);

  res.status(200).json(result);
};

export const getChatByIdCtrl = ctrlWrapper(getChatById);
