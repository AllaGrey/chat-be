import { Router } from 'express';
import {
  createChatCtrl,
  deleteChatCtrl,
  getAllUserChatsCtrl,
  getChatByIdCtrl,
  updateChatCtrl,
} from '../controllers';
import { authValidation } from '../middlewares';

const chatsRouter = Router();

chatsRouter.post('/', authValidation, createChatCtrl);
chatsRouter.get('/', authValidation, getAllUserChatsCtrl);
chatsRouter.get('/:id', authValidation, getChatByIdCtrl);
chatsRouter.put('/:id', authValidation, updateChatCtrl);
chatsRouter.delete('/:id', authValidation, deleteChatCtrl);

export default chatsRouter;
