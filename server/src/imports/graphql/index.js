import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";

export default new ApolloServer({
  typeDefs,
  resolvers
});
