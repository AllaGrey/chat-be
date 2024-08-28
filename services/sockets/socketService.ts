import { Server as SocketIOServer } from 'socket.io';
import { Server } from 'http';
import { getAllowedOrigins } from '../../utils';
import { Message } from '../../models';

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

    socket.on('sendMessage', async message => {
      const data = JSON.parse(message);

      const newMessage = await Message.create(data);

      io.emit('message', JSON.stringify(newMessage));
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};
