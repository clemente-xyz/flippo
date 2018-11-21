import { Tweet } from "../../../../collections";

const createTweet = {
  createTweet: (_, args) => Tweet.create(args)
};

const updateTweet = {
  updateTweet: (_, { _id, ...rest }) => Tweet.findByIdAndUpdate(_id, rest)
};

export { createTweet, updateTweet };
