import { Game } from "../../../../collections";
import { requireAuth } from "../../../../services/auth";

const createGame = {
  createGame: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Game.create({ ...args, user: user._id });
    } catch (error) {
      throw error;
    }
  }
};

const updateGame = {
  updateGame: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      return Game.findByIdAndUpdate(_id, rest, { new: true });
    } catch (error) {
      throw error;
    }
  }
};

const deleteGame = {
  deleteGame: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
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
