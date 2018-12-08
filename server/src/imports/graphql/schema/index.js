import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type Status {
    message: String!
  }

  type User {
    name: String!
    lastName: String!
    birth: Date
    userName: String!
    password: String!
    level: Int
    challengesApproved: [Challenge]
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
    getUser(_id: ID): User
    getUsers: [User]
  }

  type Mutation {
    createChallenge(
      animal: String!
      timeToDraw: Int!
      flippoCoins: Int!
      difficulty: Int!
    ): Challenge
    updateChallenge(
      _id: ID!
      animal: String
      timeToDraw: Int
      flippoCoins: Int
      difficulty: Int
    ): Challenge
    deleteChallenge(_id: ID!): Status
  }
`;
