import { User } from "../../../../collections";

const createUser = {
  createUser: async (_, args) => {
    const user = await User.create(args);

    return {
      token: user.createToken()
    };
  }
};

export { createUser };
