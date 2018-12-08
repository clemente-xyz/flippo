import { gql } from "apollo-server-express";

export default gql`
  type Status {
    message: String!
  }

  type Challenge {
    _id: ID!
    animal: String!
    timeToDraw: Int
    flippoCoins: Int
    difficulty: Int
  }

  type Query {
    getChallenge(_id: ID): Challenge
    getChallenges: [Challenge]
  }

  type Mutation {
    createChallenge(
      animal: String!
      timeToDraw: Int!
      flippoCoins: Int!
      difficulty: Int!
    ): Challenge
    updateChallenge(_id: ID!, text: String): Challenge
    deleteChallenge(_id: ID!): Status
  }
`;
