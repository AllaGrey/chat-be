"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMessageDataValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const addMessageDataValidation = (message) => {
    return joi_1.default.object()
        .options({ abortEarly: false })
        .keys({
        text: joi_1.default.string().required().messages({
            'any.required': 'text is required',
            'string.empty': 'text is required',
        }),
        chat: joi_1.default.string().required().messages({
            'string.base': 'chat must be a string',
            'any.required': 'chat is required',
            'string.empty': 'chat is required',
        }),
        user: joi_1.default.string().messages({
            'string.base': 'user must be a string',
            'any.required': 'user is required',
            'string.empty': 'user is required',
        }),
    })
        .validate(message);
};
exports.addMessageDataValidation = addMessageDataValidation;
