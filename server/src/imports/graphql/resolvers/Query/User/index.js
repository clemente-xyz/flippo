import { User } from "../../../../collections";

import { requireAuth } from "../../../../services/auth";

const getUser = {
  getUser: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);

      return User.findById({ _id });
    } catch (error) {
      throw error;
    }
  }
};

const getUsers = {
  getUsers: async (_, args, { user }) => {
    try {
      await requireAuth(user);

      return User.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  }
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

const me = {
  me: async (_, args, { user }) => {
    try {
      await requireAuth(user);

      return User.findById(user._id);
    } catch (error) {
      throw error;
    }
  }
};

export { getUser, getUsers, signin, me };
