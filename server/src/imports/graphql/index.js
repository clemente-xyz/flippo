import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import constants from "../config/Constants";

const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function() {
  return this.toString();
};

export default new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: req.user
  }),
  playground: {
    endpoint: constants.GRAPHQL_PATH,
    settings: {
      "editor.theme": "dark"
    }
  }
});
