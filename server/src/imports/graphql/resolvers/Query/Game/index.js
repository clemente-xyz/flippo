import { Game } from "../../../../collections";
import { requireAuth } from "../../../../services/auth";

const getGame = {
  getGame: async (_, { _id }, { user }) => {
    try {
      //await requireAuth(user);

      return Game.findById({ _id });
    } catch (error) {
      throw error;
    }
  }
};

const getGames = {
  getGames: async (_, args, { user }) => {
    try {
      //await requireAuth(user);

      return Game.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  }
};

const getUserGames = {
  getUserGames: async (_, args, { user }) => {
    try {
      //await requireAuth(user);

      return Game.find({ user: user._id }).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  }
};

export { getGame, getGames, getUserGames };
