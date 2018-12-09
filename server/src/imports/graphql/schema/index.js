import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type Status {
    message: String!
  }

  type User {
    _id: ID!
    name: String!
    lastName: String!
    birth: Date
    userName: String!
    password: String!
    level: Int
    challengesApproved: [Challenge]
    createdAt: Date!
    updatedAt: Date!
  }

  type Challenge {
    _id: ID!
    animal: String!
    timeToDraw: Int
    flippoCoins: Int
    difficulty: Int
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    getChallenge(_id: ID): Challenge
    getChallenges: [Challenge]
    getUser(_id: ID): User
    getUsers: [User]
  }

  type Mutation {
    createUser(
      name: String
      lastName: String!
      birth: Date
      userName: String!
      password: String!
      level: Int
      challengesApproved: [String]
    ): User
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
