import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function() {
  return this.toString();
};

export default new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "dark"
    }
  }
});
