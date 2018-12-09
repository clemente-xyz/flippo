import { UserQueries, ChallengeQueries, GameQueries } from "./Query";
import { UserMutations, ChallengeMutations, GameMutations } from "./Mutation";

export default {
  Query: {
    getUser: UserQueries.getUser,
    getUsers: UserQueries.getUsers,
    authUser: UserQueries.authUser,
    getChallenge: ChallengeQueries.getChallenge,
    getChallenges: ChallengeQueries.getChallenges,
    getGame: GameQueries.getGame,
    getGames: GameQueries.getGames
  },
  Mutation: {
    createChallenge: ChallengeMutations.createChallenge,
    updateChallenge: ChallengeMutations.updateChallenge,
    deleteChallenge: ChallengeMutations.deleteChallenge,
    createUser: UserMutations.createUser,
    updateUser: UserMutations.updateUser,
    deleteUser: UserMutations.deleteUser,
    createGame: GameMutations.createGame,
    updateGame: GameMutations.updateGame,
    deleteGame: GameMutations.deleteGame
  }
};
