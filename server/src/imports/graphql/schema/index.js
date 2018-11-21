import { gql } from "apollo-server-express";

export default gql`
  type Status {
    message: String!
  }

  type Tweet {
    _id: ID!
    text: String!
  }

  type Query {
    getTweet(_id: ID): Tweet
    getTweets: [Tweet]
  }

  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): Status
  }
`;
