import { Router } from 'express';
import { loginCtrl, logoutCtrl, registerCtrl } from '../controllers';
import {
  authValidation,
  loginValidation,
  registerValidation,
} from '../middlewares';

const authRouter = Router();

authRouter.post('/login', loginValidation, loginCtrl);

authRouter.post('/register', registerValidation, registerCtrl);

authRouter.post('/logout', authValidation, logoutCtrl);

export default authRouter;
