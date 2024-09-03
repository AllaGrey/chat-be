import mongoose from 'mongoose';
import app from './app';
import { Server } from 'http';
import { setupAbly } from './services';

const { PORT, MONGODB_URI } = process.env;

const dbConnection = async () => {
  if (!MONGODB_URI)
    return console.log('Failed connection: MONGODB_URI is absent');

  mongoose
    .connect(MONGODB_URI, {})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error: Error) => {
      console.log('MongoDB connection error:', error);
      process.exit(1);
    });
};

const startServer = () => {
  const server = app.listen(PORT || 3001, () => {
    console.log(`Server is running on port ${PORT}`);
  }) as Server;

  setupAbly(server);
};

(async () => {
  await dbConnection();
  startServer();
})();
