import { Chat, Message, User } from '../../models';
import { IChat } from '../../types';

export const getUserChatsWithDetails = async (currentUserId: string) => {
  const userChats = await Chat.find({ users: currentUserId }).lean<IChat[]>();

  const chatsWithDetails = await Promise.all(
    userChats.map(async (chat: IChat) => {
      const otherUserId = chat.users.find(
        userId => userId.toString() !== currentUserId.toString()
      );

      const otherUser = await User.findById(
        otherUserId,
        '_id name surname avatar'
      ).lean();

      const latestMessage = await Message.findOne({ chat: chat._id })
        .sort({ createdAt: -1 })
        .select('text createdAt')
        .lean();

      const unreadMessagesCount = await Message.countDocuments({
        chat: chat._id,
        readBy: { $ne: currentUserId },
      });

      return {
        _id: chat._id,
        otherUser: otherUser || null,
        latestMessage: latestMessage || null,
        unreadMessagesCount,
      };
    })
  );

  return chatsWithDetails;
};
