"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    text: {
        type: 'string',
        required: [true, 'Text is required'],
    },
    chat: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'Chat',
        required: [true, 'Chat is required'],
    },
    user: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'User',
        required: [true, 'User is required'],
    },
    readBy: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true, versionKey: false });
exports.Message = (0, mongoose_1.model)('Message', messageSchema);
