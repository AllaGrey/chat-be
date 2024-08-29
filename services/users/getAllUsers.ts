import { User } from '../../models';

export const getAllUsers = async () => {
  const users = await User.find({}, { _id: 1, name: 1, surname: 1, avatar: 1 });

  return users;
};
