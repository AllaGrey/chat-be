import { Router } from 'express';
import { createMessageCtrl } from '../controllers';

const messageRouter = Router();

messageRouter.post('/', createMessageCtrl);

export default messageRouter;
