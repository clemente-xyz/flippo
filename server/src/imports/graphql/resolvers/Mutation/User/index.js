import { User } from "../../../../collections";

const createUser = {
  createUser: (_, args) => User.create(args)
};

export { createUser };
