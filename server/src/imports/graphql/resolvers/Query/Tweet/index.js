import { Tweet } from "../../../../collections";

export default {
  getTweets: () => {
    Tweet.find({});
  }
};
