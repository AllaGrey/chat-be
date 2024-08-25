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
exports.createChatCtrl = void 0;
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const createChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { partner } = req.body;
    const currentUser = '66c99faf1d874074cf2e4344';
    const chat = yield models_1.Chat.create({
        users: [currentUser, partner],
    });
    console.log(chat);
    res.status(201).json(chat);
});
exports.createChatCtrl = (0, utils_1.ctrlWrapper)(createChat);
