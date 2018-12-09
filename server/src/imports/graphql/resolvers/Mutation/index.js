import { createUser, updateUser, deleteUser } from "./User";
import { createChallenge, updateChallenge, deleteChallenge } from "./Challenge";

const UserMutations = {
  createUser: createUser.createUser,
  updateUser: updateUser.updateUser,
  deleteUser: deleteUser.deleteUser
};

const ChallengeMutations = {
  createChallenge: createChallenge.createChallenge,
  updateChallenge: updateChallenge.updateChallenge,
  deleteChallenge: deleteChallenge.deleteChallenge
};

export { UserMutations, ChallengeMutations };
