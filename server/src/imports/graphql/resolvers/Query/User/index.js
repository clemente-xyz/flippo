import { User } from "../../../../collections";

const getUser = {
  getUser: (_, { _id }) => User.findById({ _id })
};

const getUsers = {
  getUsers: () => User.find({}).sort({ createdAt: -1 })
};

export { getUser, getUsers };
