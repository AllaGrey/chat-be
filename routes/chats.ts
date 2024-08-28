import { Router } from 'express';
import {
  createChatCtrl,
  deleteChatCtrl,
  getAllUserChatsCtrl,
  getChatByIdCtrl,
} from '../controllers';
import { authValidation } from '../middlewares';

const chatsRouter = Router();

chatsRouter.post('/', authValidation, createChatCtrl);
chatsRouter.get('/', authValidation, getAllUserChatsCtrl);
chatsRouter.get('/:id', authValidation, getChatByIdCtrl);
chatsRouter.delete('/:id', authValidation, deleteChatCtrl);

export default chatsRouter;
