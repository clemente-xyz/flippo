import { Tweet } from "../../../../collections";

const getTweet = {
  getTweet: (_, { _id }) => Tweet.findById({ _id })
};

const getTweets = {
  getTweets: () => Tweet.find({})
};

export { getTweet, getTweets };
