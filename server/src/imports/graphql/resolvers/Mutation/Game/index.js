import { Game } from "../../../../collections";

const createGame = {
  createGame: (_, args) => Game.create(args)
};

const updateGame = {
  updateGame: (_, { _id, ...rest }) =>
    Game.findByIdAndUpdate(_id, rest, { new: true })
};

const deleteGame = {
  deleteGame: async (_, { _id }) => {
    try {
      await Game.findByIdAndDelete(_id);
      return {
        message: "Game deletion succeded!"
      };
    } catch (error) {
      throw error;
    }
  }
};

export { createGame, updateGame, deleteGame };
