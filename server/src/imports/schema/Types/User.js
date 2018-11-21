import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});
