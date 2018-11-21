import { Tweet } from "../../../../collections";

const createTweet = {
  createTweet: (_, args) => Tweet.create(args)
};

const updateTweet = {
  updateTweet: (_, { _id, ...rest }) =>
    Tweet.findByIdAndUpdate(_id, rest, { new: true })
};

const deleteTweet = {
  deleteTweet: async (_, { _id }) => {
    try {
      await Tweet.findByIdAndDelete(_id);
      return {
        message: "Tweet deletion succeded!"
      };
    } catch (err) {
      throw err;
    }
  }
};

export { createTweet, updateTweet, deleteTweet };
