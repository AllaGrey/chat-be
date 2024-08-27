import { Server as SocketIOServer } from 'socket.io';
import { Server } from 'http';
import { getAllowedOrigins } from '../../utils';

export const setupSocketIO = (server: Server) => {
  const allowedOrigins = getAllowedOrigins();

  const io = new SocketIOServer(server, {
    cors: {
      origin: allowedOrigins,
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', socket => {
    console.log('A user connected');
    // Handle events here

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};
