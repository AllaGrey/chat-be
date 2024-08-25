"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    users: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'User',
            required: [true, 'Users are required'],
        },
    ],
}, { timestamps: true, versionKey: false });
exports.Chat = (0, mongoose_1.model)('Chat', chatSchema);
