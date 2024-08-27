"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    surname: {
        type: String,
        required: [true, 'Surname is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    access_token: {
        type: String,
        required: [true, 'Access_token is required'],
    },
    avatar: {
        type: String,
        required: [true, 'Avatar is required'],
    },
    chats: {
        type: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Chat' }],
        default: [],
    },
}, { timestamps: true, versionKey: false });
exports.User = (0, mongoose_1.model)('User', userSchema);
