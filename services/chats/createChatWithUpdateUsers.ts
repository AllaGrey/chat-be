import { Chat, User } from '../../models';

export const createChatWithUpdateUsers = async (
  currentUser: string,
  partner: string
) => {
  const chat = await Chat.create({
    users: [currentUser, partner],
  });

  await Promise.all([
    User.findByIdAndUpdate(currentUser, { $push: { chats: chat._id } }),
    User.findByIdAndUpdate(partner, { $push: { chats: chat._id } }),
  ]);

  const otherUser = await User.findById(partner).select(
    '_id name surname avatar'
  );

  return {
    _id: chat._id,
    otherUser: otherUser || null,
    latestMessage: null,
  };
};
