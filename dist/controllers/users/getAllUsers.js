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
exports.getAllUsersCtrl = void 0;
const utils_1 = require("../../utils");
const services_1 = require("../../services");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currentUserId = res.locals.user._id.toString();
    const users = yield (0, services_1.getAllUsers)(currentUserId);
    res.status(200).json(users);
});
exports.getAllUsersCtrl = (0, utils_1.ctrlWrapper)(getUsers);
