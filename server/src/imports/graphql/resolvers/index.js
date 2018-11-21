import { tweetQueries } from "./Query";
import { tweetMutations } from "./Mutation";

export default {
  Query: {
    getTweet: tweetQueries.getTweet,
    getTweets: tweetQueries.getTweets
  },
  Mutation: {
    createTweet: tweetMutations.createTweet,
    updateTweet: tweetMutations.updateTweet
  }
};
