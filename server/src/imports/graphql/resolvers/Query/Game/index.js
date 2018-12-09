import { Game } from "../../../../collections";

const getGame = {
  getGame: (_, { _id }) => Game.findById({ _id })
};

const getGames = {
  getGames: () => Game.find({}).sort({ createdAt: -1 })
};

export { getGame, getGames };
