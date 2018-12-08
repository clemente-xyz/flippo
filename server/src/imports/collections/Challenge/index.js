import mongoose, { Schema } from "mongoose";

const ChallengeSchema = new Schema(
  {
    animal: String,
    timeToDraw: Number,
    flippoCoins: Number,
    difficulty: Number
  },
  { timestamps: true }
);

export default mongoose.model("Challenge", ChallengeSchema);
