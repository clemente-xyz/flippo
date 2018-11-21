import { createTweet, updateTweet } from "./Tweet";

const tweetMutations = {
  createTweet: createTweet.createTweet,
  updateTweet: updateTweet.updateTweet
};

export { tweetMutations };
