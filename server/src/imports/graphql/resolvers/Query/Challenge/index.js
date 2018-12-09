import { Challenge } from "../../../../collections";

const getChallenge = {
  getChallenge: (_, { _id }) => Challenge.findById({ _id })
};

const getChallenges = {
  getChallenges: () => Challenge.find({}).sort({ createdAt: -1 })
};

export { getChallenge, getChallenges };
