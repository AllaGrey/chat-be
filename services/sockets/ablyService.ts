import { Request, Response } from 'express';
import { ctrlWrapper } from '../../utils';
import { Message } from '../../models';
import Ably from 'ably';
import { IMessage } from '../../types';

const { ABLY_API_KEY } = process.env;

const ably = new Ably.Realtime({ key: ABLY_API_KEY });
const channel = ably.channels.get('chat');

export const publishMessage = async (newMessage: any) => {
  try {
    await channel.publish('message', JSON.stringify(newMessage));
    console.log('Message published successfully');
  } catch (error) {
    console.error('Error creating message or publishing to Ably:', error);
  }
};
