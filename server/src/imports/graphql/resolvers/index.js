import { ChallengeQueries } from "./Query";
import { ChallengeMutations } from "./Mutation";

export default {
  Query: {
    getChallenge: ChallengeQueries.getChallenge,
    getChallenges: ChallengeQueries.getChallenges
  },
  Mutation: {
    createChallenge: ChallengeMutations.createChallenge,
    updateChallenge: ChallengeMutations.updateChallenge,
    deleteChallenge: ChallengeMutations.deleteChallenge
  }
};
