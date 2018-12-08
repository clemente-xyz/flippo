import { createUser } from "./User";
import { createChallenge, updateChallenge, deleteChallenge } from "./Challenge";

const UserMutations = {
  createUser: createUser.createUser
};

const ChallengeMutations = {
  createChallenge: createChallenge.createChallenge,
  updateChallenge: updateChallenge.updateChallenge,
  deleteChallenge: deleteChallenge.deleteChallenge
};

export { UserMutations, ChallengeMutations };
