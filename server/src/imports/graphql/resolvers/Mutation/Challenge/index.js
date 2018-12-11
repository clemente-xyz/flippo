import { Challenge } from "../../../../collections";
import { requireAuth } from "../../../../services";

const createChallenge = {
  createChallenge: async (_, args, { user }) => {
    try {
      await requireAuth(user);

      return Challenge.create(args);
    } catch (error) {
      throw error;
    }
  }
};

const updateChallenge = {
  updateChallenge: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);

      return Challenge.findByIdAndUpdate(_id, rest, { new: true });
    } catch (error) {
      throw error;
    }
  }
};

const deleteChallenge = {
  deleteChallenge: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      await Challenge.findByIdAndDelete(_id);
      return {
        message: "Challenge deletion succeded!"
      };
    } catch (error) {
      throw error;
    }
  }
};

export { createChallenge, updateChallenge, deleteChallenge };
