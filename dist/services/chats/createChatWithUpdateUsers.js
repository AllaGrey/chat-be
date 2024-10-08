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
exports.createChatWithUpdateUsers = void 0;
const models_1 = require("../../models");
const createChatWithUpdateUsers = (currentUser, partner) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield models_1.Chat.create({
        users: [currentUser, partner],
    });
    yield Promise.all([
        models_1.User.findByIdAndUpdate(currentUser, { $push: { chats: chat._id } }),
        models_1.User.findByIdAndUpdate(partner, { $push: { chats: chat._id } }),
    ]);
    const otherUser = yield models_1.User.findById(partner).select('_id name surname avatar');
    return {
        _id: chat._id,
        otherUser: otherUser || null,
        latestMessage: null,
    };
});
exports.createChatWithUpdateUsers = createChatWithUpdateUsers;
