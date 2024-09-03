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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAbly = void 0;
const ably_1 = __importDefault(require("ably"));
const models_1 = require("../../models");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { ABLY_API_KEY } = process.env;
const setupAbly = (server) => {
    const ably = new ably_1.default.Realtime({ key: ABLY_API_KEY });
    const channel = ably.channels.get('chat');
    server.on('request', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (req.method === 'POST' && req.url === '/sendMessage') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
                const data = JSON.parse(body);
                try {
                    const newMessage = yield models_1.Message.create(data);
                    console.log('New message created:', newMessage);
                    channel
                        .publish('message', JSON.stringify(newMessage))
                        .then(() => {
                        console.log('Message published successfully');
                    })
                        .catch((err) => {
                        console.error('Failed to publish message:', err);
                    });
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, message: newMessage }));
                }
                catch (error) {
                    console.error('Error creating message:', error);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: error }));
                }
            }));
        }
    }));
    ably.connection.on('connected', () => {
        console.log('Connected to Ably');
    });
    ably.connection.on('disconnected', () => {
        console.log('Disconnected from Ably');
    });
    return ably;
};
exports.setupAbly = setupAbly;
