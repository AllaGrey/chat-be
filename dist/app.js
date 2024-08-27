"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
dotenv_1.default.config();
const { chatsRouter, authRouter, messageRouter, usersRouter } = routes_1.default;
const allowedOrigins = (0, utils_1.getAllowedOrigins)();
const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});
app.use('/api/auth', authRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/users', usersRouter);
app.use('/api/messages', messageRouter);
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).json({ error: { message, status } });
});
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
exports.default = app;
