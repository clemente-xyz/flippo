import mongoose, { Schema } from "mongoose";

const GameSchema = new Schema(
  {
    challenge: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    reached: Boolean
  },
  { timestamps: true }
);

export default mongoose.model("Game", GameSchema);
