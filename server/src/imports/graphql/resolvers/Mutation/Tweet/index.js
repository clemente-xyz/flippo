import { Tweet } from "../../../../collections";

const createTweet = {
  createTweet: (_, args) => Tweet.create(args)
};

export { createTweet };
