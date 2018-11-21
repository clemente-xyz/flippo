import { gql } from "apollo-server-express";

export default gql`
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
  }
`;
