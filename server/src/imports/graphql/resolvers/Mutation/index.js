import { createUser, updateUser, deleteUser } from "./User";
import { createChallenge, updateChallenge, deleteChallenge } from "./Challenge";
import { createGame, updateGame, deleteGame } from "./Game";

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

const GameMutations = {
  createGame: createGame.createGame,
  updateGame: updateGame.updateGame,
  deleteGame: deleteGame.deleteGame
};

export { UserMutations, ChallengeMutations, GameMutations };
