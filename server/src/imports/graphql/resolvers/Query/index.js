import { getUser, getUsers, authUser } from "./User";
import { getChallenge, getChallenges } from "./Challenge";

const UserQueries = {
  getUser: getUser.getUser,
  getUsers: getUsers.getUsers,
  authUser: authUser.authUser
};
const ChallengeQueries = {
  getChallenge: getChallenge.getChallenge,
  getChallenges: getChallenges.getChallenges
};

export { UserQueries, ChallengeQueries };
