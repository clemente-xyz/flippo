import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} from "graphql";

export default new GraphQLObjectType({
  name: "Chanllenge",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    difficulty: { type: GraphQLInt }
  })
});
