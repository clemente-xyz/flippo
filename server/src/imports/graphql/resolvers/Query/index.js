import { getUser, getUsers } from "./User";
import { getChallenge, getChallenges } from "./Challenge";

const UserQueries = {
  getUser: getUser.getUser,
  getUsers: getUsers.getUsers
};
const ChallengeQueries = {
  getChallenge: getChallenge.getChallenge,
  getChallenges: getChallenges.getChallenges
};

export { UserQueries, ChallengeQueries };
