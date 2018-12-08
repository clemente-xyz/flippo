import { User } from "../../../../collections";

const getUser = {
  getUser: (_, { _id }) => User.findById({ _id })
};

export { getUser };
