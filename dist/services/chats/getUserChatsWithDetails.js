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
exports.getUserChatsWithDetails = void 0;
const models_1 = require("../../models");
const getUserChatsWithDetails = (currentUserId) => __awaiter(void 0, void 0, void 0, function* () {
    const userChats = yield models_1.Chat.find({ users: currentUserId }).lean();
    const chatsWithDetails = yield Promise.all(userChats.map((chat) => __awaiter(void 0, void 0, void 0, function* () {
        const otherUserId = chat.users.find(userId => userId.toString() !== currentUserId.toString());
        const otherUser = yield models_1.User.findById(otherUserId, '_id name surname avatar').lean();
        const latestMessage = yield models_1.Message.findOne({ chat: chat._id })
            .sort({ createdAt: -1 })
            .select('text createdAt')
            .lean();
        return {
            id: chat._id,
            otherUser: Object.assign(Object.assign({}, otherUser), { id: otherUser === null || otherUser === void 0 ? void 0 : otherUser._id }) || null,
            latestMessage: Object.assign(Object.assign({}, latestMessage), { id: latestMessage === null || latestMessage === void 0 ? void 0 : latestMessage._id }) || null,
        };
    })));
    return chatsWithDetails;
});
exports.getUserChatsWithDetails = getUserChatsWithDetails;
