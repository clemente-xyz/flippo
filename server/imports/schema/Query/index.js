const { GraphQLObjectType } = require("graphql");

const UserQuery = require("./User");
const ChallengeQuery = require("./Challenge");

module.exports = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: UserQuery,
    challenge: ChallengeQuery
  }
});
