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
exports.registerValidation = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const services_1 = require("../../services");
const registerValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, email, password } = req.body;
    console.log(password);
    const { error } = (0, services_1.registerDataValidation)({ name, surname, email, password });
    if (error)
        return next((0, utils_1.HttpError)(400, `${error.message}`));
    const user = yield models_1.User.findOne({ email });
    if (user)
        return next((0, utils_1.HttpError)(400, 'Email in use'));
    const hashedPassword = yield (0, services_1.hashPassword)(password);
    const access_token = (0, services_1.createToken)(email);
    req.body = { name, surname, email, password: hashedPassword, access_token };
    next();
});
exports.registerValidation = registerValidation;
