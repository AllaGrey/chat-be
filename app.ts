import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { IHttpError } from './types';
import routes from './routes';

const app: Application = express();

dotenv.config();

const { chatsRouter, authRouter, messageRouter, usersRouter } = routes;

app.use(cors());

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API!' });
});

app.use('/api/auth', authRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/users', usersRouter);
app.use('/api/messages', messageRouter);

app.use((err: IHttpError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: { message, status } });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app;
