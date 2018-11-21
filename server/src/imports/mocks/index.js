import faker from "faker";
import { Tweet } from "../collections";

const TWEET_TOTAL = 10;

export default async () => {
  try {
    await Tweet.remove();
    await Array.from({ length: TWEET_TOTAL }).forEach(
      async () => await Tweet.create({ text: faker.lorem.paragraphs(1) })
    );
  } catch (err) {
    throw err;
  }
};
