import { User } from '../../models';
import { IUser } from '../../types';

export const createUser = async (userData: IUser) => {
  const {
    _id: id,
    name,
    surname,
    access_token,
    avatar,
  } = await User.create(userData);

  return { id, name, surname, avatar, access_token };
};
