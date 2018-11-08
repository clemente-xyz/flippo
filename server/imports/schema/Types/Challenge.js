const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require("graphql");

const ChallengeType = new GraphQLObjectType({
  name: "Chanllenge",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    difficulty: { type: GraphQLInt }
  })
});

module.exports = ChallengeType;
