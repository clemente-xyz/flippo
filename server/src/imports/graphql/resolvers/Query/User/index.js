import { User } from "../../../../collections";

const getUser = {
  getUser: (_, { _id }) => User.findById({ _id })
};

const getUsers = {
  getUsers: () => User.find({})
};

export { getUser, getUsers };
