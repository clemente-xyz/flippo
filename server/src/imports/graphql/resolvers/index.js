import { UserQueries, ChallengeQueries } from "./Query";
import { ChallengeMutations } from "./Mutation";

export default {
  Query: {
    getUser: UserQueries.getUser,
    getUsers: UserQueries.getUsers,
    getChallenge: ChallengeQueries.getChallenge,
    getChallenges: ChallengeQueries.getChallenges
  },
  Mutation: {
    createChallenge: ChallengeMutations.createChallenge,
    updateChallenge: ChallengeMutations.updateChallenge,
    deleteChallenge: ChallengeMutations.deleteChallenge
  }
};
