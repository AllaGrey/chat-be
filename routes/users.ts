import { Router } from 'express';
import { getCurrentUserCtrl } from '../controllers';
import { authValidation, updateUserValidation } from '../middlewares';
import { updateUserCtrl } from '../controllers/auth';

const usersRouter = Router();

usersRouter.get('/current', authValidation, getCurrentUserCtrl);
usersRouter.put('/', authValidation, updateUserValidation, updateUserCtrl);

export default usersRouter;
