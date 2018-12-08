import { Challenge } from "../../../../collections";

const createChallenge = {
  createChallenge: (_, args) => Challenge.create(args)
};

const updateChallenge = {
  updateChallenge: (_, { _id, ...rest }) =>
    Challenge.findByIdAndUpdate(_id, rest, { new: true })
};

const deleteChallenge = {
  deleteChallenge: async (_, { _id }) => {
    try {
      await Challenge.findByIdAndDelete(_id);
      return {
        message: "Challenge deletion succeded!"
      };
    } catch (err) {
      throw err;
    }
  }
};

export { createChallenge, updateChallenge, deleteChallenge };
