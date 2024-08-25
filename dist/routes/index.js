"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
const users_1 = __importDefault(require("./users"));
const chats_1 = __importDefault(require("./chats"));
const messages_1 = __importDefault(require("./messages"));
exports.default = {
    authRouter: auth_1.default,
    usersRouter: users_1.default,
    chatsRouter: chats_1.default,
    messageRouter: messages_1.default,
};
