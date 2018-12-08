import { Challenge } from "../../../../collections";

const getChallenge = {
  getChallenge: (_, { _id }) => Challenge.findById({ _id })
};

const getChallenges = {
  getChallenges: () => Challenge.find({})
};

export { getChallenge, getChallenges };
