"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChatDataValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const addChatDataValidation = (users) => {
    return joi_1.default.object({
        users: joi_1.default.array()
            .items(joi_1.default.string().required().messages({
            'string.empty': 'User ID cannot be empty',
        }))
            .length(2)
            .unique()
            .required()
            .messages({
            'array.base': 'Users must be an array of user IDs',
            'array.length': 'Exactly two users are required',
            'array.unique': 'Users must be unique',
            'any.required': 'Users are required',
        }),
    })
        .options({ abortEarly: false })
        .validate({ users });
};
exports.addChatDataValidation = addChatDataValidation;
