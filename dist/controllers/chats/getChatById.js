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
exports.getChatByIdCtrl = void 0;
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const getChatById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const messageList = yield models_1.Message.find({ chat: id })
        .sort({ createdAt: 1 })
        .lean();
    res.status(200).json(messageList);
});
exports.getChatByIdCtrl = (0, utils_1.ctrlWrapper)(getChatById);
