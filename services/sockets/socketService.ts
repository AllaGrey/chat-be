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

    socket.on('sendMessage', messageText => {
      console.log(messageText, 'sent message');
      const message = {
        id: 1, // Унікальний ідентифікатор, можете використовувати uuid або MongoDB ObjectId
        sender: 'Anna Li', // Візьміть реальне ім'я користувача, якщо потрібно
        text: messageText,
        createdAt: new Date().toLocaleString('en-US', {
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }),
      };

      // Відправка об'єкта повідомлення усім підключеним клієнтам
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};
