import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true
    },
    password: String,
    name: String,
    lastName: String,
    birth: Date,
    avatar: String,
    level: Number,
    challengesApproved: Array
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
