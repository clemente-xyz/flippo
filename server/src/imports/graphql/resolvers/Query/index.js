import { getUser } from "./User";
import { getChallenge, getChallenges } from "./Challenge";

const UserQueries = {
  getUser: getUser.getUser
};
const ChallengeQueries = {
  getChallenge: getChallenge.getChallenge,
  getChallenges: getChallenges.getChallenges
};

export { UserQueries, ChallengeQueries };
