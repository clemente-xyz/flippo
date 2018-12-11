import { User } from "../../../../collections";

const getUser = {
  getUser: (_, { _id }) => User.findById({ _id })
};

const getUsers = {
  getUsers: () => User.find({}).sort({ createdAt: -1 })
};

const signin = {
  signin: async (_, { userName, password }) => {
    const user = await User.findOne({ userName });

    if (!user) {
      throw new Error("User not found!");
    } else {
      if (!user.checkPassword(password)) {
        throw new Error("Passwords don't match!");
      }
      return {
        token: user.createToken()
      };
    }
  }
};

export { getUser, getUsers, signin };
