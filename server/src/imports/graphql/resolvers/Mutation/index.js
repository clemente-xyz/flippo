import { createChallenge, updateChallenge, deleteChallenge } from "./Challenge";

const ChallengeMutations = {
  createChallenge: createChallenge.createChallenge,
  updateChallenge: updateChallenge.updateChallenge,
  deleteChallenge: deleteChallenge.deleteChallenge
};

export { ChallengeMutations };
