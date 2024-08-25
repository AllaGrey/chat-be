"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../../utils");
const createToken = (userId) => {
    const { JWT_SECRET, JWT_ACCESS_EXPIRES } = process.env;
    if (!JWT_SECRET || !JWT_ACCESS_EXPIRES)
        throw (0, utils_1.HttpError)(500, 'Invalid environment');
    const token = jsonwebtoken_1.default.sign({ data: userId }, JWT_SECRET, {
        expiresIn: JWT_ACCESS_EXPIRES,
    });
    return token;
};
exports.createToken = createToken;
