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
exports.getAllUserChatsCtrl = void 0;
const utils_1 = require("../../utils");
const services_1 = require("../../services");
const getAllUserChats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id: currentUserId } = res.locals.user;
    const chatsWithDetails = yield (0, services_1.getUserChatsWithDetails)(currentUserId);
    res.status(200).json(chatsWithDetails);
});
exports.getAllUserChatsCtrl = (0, utils_1.ctrlWrapper)(getAllUserChats);
