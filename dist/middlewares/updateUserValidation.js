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
exports.updateUserValidation = void 0;
const models_1 = require("../models");
const users_1 = require("../services/users");
const utils_1 = require("../utils");
const updateUserValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, avatar } = req.body;
    const id = res.locals.user._id;
    const { error } = (0, users_1.updateUserDataValidation)({ name, surname, avatar });
    if (error)
        return next((0, utils_1.HttpError)(400, `${error.message}`));
    const newUser = yield models_1.User.findByIdAndUpdate(id, { name, surname, avatar }, { new: true });
    console.log(newUser);
    res.locals.newUser = newUser;
    next();
});
exports.updateUserValidation = updateUserValidation;
