import { Router } from 'express';
import { createMessageCtrl } from '../controllers';
import { authValidation } from '../middlewares';

const messageRouter = Router();

messageRouter.post('/', authValidation, createMessageCtrl);

export default messageRouter;
