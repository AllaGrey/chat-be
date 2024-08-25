"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginDataValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const loginDataValidation = (loginData) => {
    return joi_1.default.object()
        .options({ abortEarly: false })
        .keys({
        email: joi_1.default.string().required().messages({
            'any.required': 'email is required',
            'string.empty': 'email is required',
        }),
        password: joi_1.default.string().required().messages({
            'any.required': 'password is required',
            'string.empty': 'password is required',
        }),
    })
        .validate(loginData);
};
exports.loginDataValidation = loginDataValidation;
