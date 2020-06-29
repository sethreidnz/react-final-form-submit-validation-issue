import { userInfo } from "os";

export type User = {
  firstName?: String;
};

export const createUser = (user: User): Promise<User> => {
  return Promise.resolve(user);
};
