import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app: Application = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API!' });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app;
