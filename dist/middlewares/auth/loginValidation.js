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
exports.loginValidation = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const services_1 = require("../../services");
const loginValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { error } = (0, services_1.loginDataValidation)({ email, password });
    if (error)
        next((0, utils_1.HttpError)(400, `${error.message}`));
    const user = yield models_1.User.findOne({ email });
    if (!user)
        return next((0, utils_1.HttpError)(401, 'Email or password is incorrect'));
    const isValidPassword = yield (0, services_1.comparePassword)(password, user.password);
    if (!isValidPassword)
        throw (0, utils_1.HttpError)(401, 'Email or password is incorrect');
    const access_token = (0, services_1.createToken)(email);
    res.locals = { user, new_access_token: access_token };
    next();
});
exports.loginValidation = loginValidation;
