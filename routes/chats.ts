import { Router } from 'express';
import {
  createChatCtrl,
  deleteChatCtrl,
  getAllUserChatsCtrl,
  getChatByIdCtrl,
} from '../controllers';

const chatsRouter = Router();

chatsRouter.post('/', createChatCtrl);
chatsRouter.get('/', getAllUserChatsCtrl);
chatsRouter.get('/:id', getChatByIdCtrl);
chatsRouter.delete('/:id', deleteChatCtrl);

export default chatsRouter;
