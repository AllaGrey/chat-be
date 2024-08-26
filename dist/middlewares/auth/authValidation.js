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
exports.authValidation = void 0;
const models_1 = require("../../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../../utils");
const authValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const { JWT_SECRET } = process.env;
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return next((0, utils_1.HttpError)(401, 'Authorization token is missing or invalid'));
    }
    const token = authorization.split(' ')[1];
    if (!JWT_SECRET)
        return next((0, utils_1.HttpError)(500, 'Invalid environment'));
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    const user = yield models_1.User.findOne({ email: decoded.data });
    console.log(user);
    if (!user) {
        return next((0, utils_1.HttpError)(401, 'User not found'));
    }
    res.locals.user = user;
    next();
});
exports.authValidation = authValidation;
