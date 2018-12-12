import { getUser, getUsers, signin, me } from "./User";
import { getChallenge, getChallenges } from "./Challenge";
import { getGame, getGames, getUserGames } from "./Game";

const UserQueries = {
  getUser: getUser.getUser,
  getUsers: getUsers.getUsers,
  signin: signin.signin,
  me: me.me
};

const ChallengeQueries = {
  getChallenge: getChallenge.getChallenge,
  getChallenges: getChallenges.getChallenges
};

const GameQueries = {
  getGame: getGame.getGame,
  getGames: getGames.getGames,
  getUserGames: getUserGames.getUserGames
};

export { UserQueries, ChallengeQueries, GameQueries };
