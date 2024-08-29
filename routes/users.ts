import { Router } from 'express';
import {
  getAllUsersCtrl,
  getCurrentUserCtrl,
  updateUserCtrl,
} from '../controllers';
import { authValidation, updateUserValidation } from '../middlewares';

const usersRouter = Router();

usersRouter.get('/', authValidation, getAllUsersCtrl);
usersRouter.get('/current', authValidation, getCurrentUserCtrl);
usersRouter.put('/', authValidation, updateUserValidation, updateUserCtrl);

export default usersRouter;
