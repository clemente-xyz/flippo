import { GraphQLObjectType } from "graphql";
import UserQuery from "./User";
import ChallengeQuery from "./Challenge";

export default new GraphQLObjectType({
  name: "Query",
  fields: {
    user: UserQuery,
    challenge: ChallengeQuery
  }
});
