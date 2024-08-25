import { Schema, SchemaTypes, model } from 'mongoose';

const messageSchema: Schema = new Schema(
  {
    text: {
      type: 'string',
      required: [true, 'Text is required'],
    },
    chat: {
      type: SchemaTypes.ObjectId,
      ref: 'Chat',
      required: [true, 'Chat is required'],
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
  },
  { timestamps: true, versionKey: false }
);

export const Message = model('Message', messageSchema);
