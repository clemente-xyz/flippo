import { UserQueries, ChallengeQueries, GameQueries } from "./Query";
import { UserMutations, ChallengeMutations, GameMutations } from "./Mutation";
import { User } from "../../collections";

export default {
  Query: {
    getUser: UserQueries.getUser,
    getUsers: UserQueries.getUsers,
    signin: UserQueries.signin,
    me: UserQueries.me,
    getChallenge: ChallengeQueries.getChallenge,
    getChallenges: ChallengeQueries.getChallenges,
    getGame: GameQueries.getGame,
    getGames: GameQueries.getGames,
    getUserGames: GameQueries.getUserGames
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
  },
  Game: {
    user: ({ user }) => User.findById(user)
  }
};
