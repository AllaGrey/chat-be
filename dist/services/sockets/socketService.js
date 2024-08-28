"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocketIO = void 0;
const socket_io_1 = require("socket.io");
const utils_1 = require("../../utils");
const models_1 = require("../../models");
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
        socket.on('sendMessage', (message) => __awaiter(void 0, void 0, void 0, function* () {
            const data = JSON.parse(message);
            const newMessage = yield models_1.Message.create(data);
            io.emit('message', JSON.stringify(newMessage));
        }));
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
    return io;
};
exports.setupSocketIO = setupSocketIO;
