import { gql } from "apollo-server-express";

export default gql`
  type Tweet {
    _id: ID
    text: String
  }

  type Query {
    getTweets: [Tweet]
  }
`;
