import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type Auth {
    token: String!
  }

  type Status {
    message: String!
  }

  type User {
    _id: ID!
    userName: String!
    name: String!
    lastName: String!
    birth: Date
    avatar: String
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

    authUser(userName: String!, password: String!): Auth
  }

  type Mutation {
    createUser(
      userName: String!
      password: String!
      name: String
      lastName: String
      birth: Date
      avatar: String
      level: Int
      challengesApproved: [String]
    ): Auth

    updateUser(
      _id: ID!
      userName: String
      password: String
      name: String
      lastName: String
      birth: Date
      avatar: String
      level: Int
      challengesApproved: [String]
    ): User

    deleteUser(_id: ID!): Status

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
