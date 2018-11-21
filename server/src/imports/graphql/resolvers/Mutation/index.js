import { createTweet, updateTweet, deleteTweet } from "./Tweet";

const tweetMutations = {
  createTweet: createTweet.createTweet,
  updateTweet: updateTweet.updateTweet,
  deleteTweet: deleteTweet.deleteTweet
};

export { tweetMutations };
