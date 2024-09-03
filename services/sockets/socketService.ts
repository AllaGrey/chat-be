import Ably from 'ably';
import { Server } from 'http';
import { getAllowedOrigins } from '../../utils';
import { Message } from '../../models';
import dotenv from 'dotenv';

dotenv.config();

const { ABLY_API_KEY } = process.env;

export const setupAbly = (server: Server) => {
  const ably = new Ably.Realtime({ key: ABLY_API_KEY });

  const channel = ably.channels.get('chat');

  server.on('request', async (req, res) => {
    if (req.method === 'POST' && req.url === '/sendMessage') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', async () => {
        const data = JSON.parse(body);

        try {
          const newMessage = await Message.create(data);
          console.log('New message created:', newMessage);

          channel
            .publish('message', JSON.stringify(newMessage))
            .then(() => {
              console.log('Message published successfully');
            })
            .catch((err: Ably.ErrorInfo) => {
              console.error('Failed to publish message:', err);
            });

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, message: newMessage }));
        } catch (error) {
          console.error('Error creating message:', error);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: error }));
        }
      });
    }
  });

  ably.connection.on('connected', () => {
    console.log('Connected to Ably');
  });

  ably.connection.on('disconnected', () => {
    console.log('Disconnected from Ably');
  });

  return ably;
};
