import { User } from '../../models';

export const getAllUsers = async (currentUserId: string) => {
  const users = await User.find(
    { _id: { $ne: currentUserId } },
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
