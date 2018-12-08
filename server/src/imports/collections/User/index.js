import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  lastName: String,
  birth: Date,
  userName: String,
  password: String,
  level: Number,
  challengesApproved: Array
});

export default mongoose.model("User", UserSchema);