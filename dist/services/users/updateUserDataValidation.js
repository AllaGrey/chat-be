"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDataValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const updateUserDataValidation = (data) => {
    return joi_1.default.object()
        .options({ abortEarly: false })
        .keys({
        name: joi_1.default.string().required().messages({
            'any.required': 'name is required',
            'string.empty': 'name is required',
        }),
        surname: joi_1.default.string().required().messages({
            'any.required': 'surname is required',
            'string.empty': 'surname is required',
        }),
        avatar: joi_1.default.string().required().messages({
            'any.required': 'avatar is required',
            'string.empty': 'avatar is required',
        }),
    })
        .validate(data);
};
exports.updateUserDataValidation = updateUserDataValidation;
