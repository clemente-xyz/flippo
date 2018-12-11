import { Challenge } from "../../../../collections";
import { requireAuth } from "../../../../services";

const getChallenge = {
  getChallenge: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);

      Challenge.findById({ _id });
    } catch (error) {
      throw error;
    }
  }
};

const getChallenges = {
  getChallenges: async (_, args, { user }) => {
    try {
      await requireAuth(user);

      return Challenge.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  }
};

export { getChallenge, getChallenges };
