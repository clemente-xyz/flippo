import mongoose, { Schema } from "mongoose";

const GameSchema = new Schema(
  {
    challenge: String,
    user: String,
    reached: Boolean
  },
  { timestamps: true }
);

export default mongoose.model("Game", GameSchema);
