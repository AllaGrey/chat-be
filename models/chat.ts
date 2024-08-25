import { Schema, SchemaTypes, model } from 'mongoose';

const chatSchema: Schema = new Schema(
  {
    users: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: [true, 'Users are required'],
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

export const Chat = model('Chat', chatSchema);
