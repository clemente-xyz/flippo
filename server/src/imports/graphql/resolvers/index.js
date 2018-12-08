import { UserQueries, ChallengeQueries } from "./Query";
import { UserMutations, ChallengeMutations } from "./Mutation";

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
    deleteChallenge: ChallengeMutations.deleteChallenge,
    createUser: UserMutations.createUser
  }
};
