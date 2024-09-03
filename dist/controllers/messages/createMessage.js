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
exports.createMessageCtrl = void 0;
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const services_1 = require("../../services");
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, chat } = req.body;
    const { _id: currentUser } = res.locals.user;
    const message = yield models_1.Message.create({
        text,
        chat,
        user: currentUser,
        readBy: [currentUser],
    });
    console.log(message);
    if (!message)
        throw (0, utils_1.HttpError)(500, 'Internal Server Error');
    const publishedMessage = yield (0, services_1.publishMessage)(message);
    res.status(201).json(message);
});
exports.createMessageCtrl = (0, utils_1.ctrlWrapper)(createMessage);
