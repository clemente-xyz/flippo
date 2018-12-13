import { User } from "../../../../collections";

const signup = {
  signup: async (_, args) => {
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

const deleteUser = {
  deleteUser: async (_, { _id }) => {
    try {
      await User.findByIdAndDelete(_id);

      return {
        message: "User deletion successful!"
      };
    } catch (error) {
      throw error;
    }
  }
};

export { signup, updateUser, deleteUser };
