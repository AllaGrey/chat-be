import { Router } from 'express';
import { getCurrentUserCtrl } from '../controllers';
import { authValidation } from '../middlewares';

const usersRouter = Router();

usersRouter.get('/current', authValidation, getCurrentUserCtrl);
usersRouter.put('/', (req, res) => {});

export default usersRouter;
