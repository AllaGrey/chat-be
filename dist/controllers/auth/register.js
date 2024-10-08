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
exports.registerCtrl = void 0;
const utils_1 = require("../../utils");
const services_1 = require("../../services");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, email, password, access_token, avatar } = req.body;
    const user = yield (0, services_1.createUser)({
        name,
        surname,
        email,
        password,
        access_token,
        avatar,
    });
    res.status(201).json(user);
});
exports.registerCtrl = (0, utils_1.ctrlWrapper)(register);
