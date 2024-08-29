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
exports.getAllUsers = void 0;
const models_1 = require("../../models");
const getAllUsers = (currentUserId) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield models_1.User.find({ _id: { $ne: currentUserId } }, { _id: 1, name: 1, surname: 1, avatar: 1 }).lean();
    const transformedUsers = users.map(user => ({
        id: user._id,
        name: user.name,
        surname: user.surname,
        avatar: user.avatar,
    }));
    return transformedUsers;
});
exports.getAllUsers = getAllUsers;
