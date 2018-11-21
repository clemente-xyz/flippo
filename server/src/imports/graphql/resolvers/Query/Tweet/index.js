import { Tweet } from "../../../../collections";

export default {
  getTweets: () => {
    return Tweet.find({});
  }
};
