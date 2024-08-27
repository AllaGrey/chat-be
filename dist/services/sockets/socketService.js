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
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
    return io;
};
exports.setupSocketIO = setupSocketIO;
