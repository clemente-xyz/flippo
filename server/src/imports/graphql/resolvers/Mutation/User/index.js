import { User } from "../../../../collections";

const createUser = {
  createUser: async (_, args) => {
    const user = await User.create(args);

    return {
      token: user.createToken()
    };
  }
};

const updateUser = {
  updateUser: (_, { _id, ...rest }) =>
    User.findByIdAndUpdate(_id, rest, { new: true })
};

export { createUser, updateUser };
