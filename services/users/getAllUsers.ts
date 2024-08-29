import { Chat, User } from '../../models';

export const getAllUsers = async (currentUserId: string) => {
  const userChats = await Chat.find({ users: currentUserId }).select('users');

  const usersWithChats = userChats
    .flatMap(chat => chat.users)
    .map(userId => userId);

  usersWithChats.push(currentUserId);

  const users = await User.find(
    { _id: { $nin: usersWithChats } },
    { _id: 1, name: 1, surname: 1, avatar: 1 }
  ).lean();

  const transformedUsers = users.map(user => ({
    id: user._id,
    name: user.name,
    surname: user.surname,
    avatar: user.avatar,
  }));

  return transformedUsers;
};
