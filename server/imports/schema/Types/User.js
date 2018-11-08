const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const UserQuery = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

module.exports = UserQuery;
