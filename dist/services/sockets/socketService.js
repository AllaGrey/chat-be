"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocketIO = void 0;
const socket_io_1 = require("socket.io");
const utils_1 = require("../../utils");
const setupSocketIO = (server) => {
    const allowedOrigins = (0, utils_1.getAllowedOrigins)();
    const io = new socket_io_1.Server(server, {
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
exports.setupSocketIO = setupSocketIO;
