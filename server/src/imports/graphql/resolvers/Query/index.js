import { getUser, getUsers, authUser } from "./User";
import { getChallenge, getChallenges } from "./Challenge";
import { getGame, getGames } from "./Game";

const UserQueries = {
  getUser: getUser.getUser,
  getUsers: getUsers.getUsers,
  authUser: authUser.authUser
};

const ChallengeQueries = {
  getChallenge: getChallenge.getChallenge,
  getChallenges: getChallenges.getChallenges
};

const GameQueries = {
  getGame: getGame.getGame,
  getGames: getGames.getGames
};

export { UserQueries, ChallengeQueries, GameQueries };
