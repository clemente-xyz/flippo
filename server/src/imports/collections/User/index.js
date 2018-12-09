import mongoose, { Schema } from "mongoose";
import { hashSync, compareSync } from "bcrypt-nodejs";

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

UserSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },

  checkPassword(password) {
    return compareSync(password, this.password);
  }
};

export default mongoose.model("User", UserSchema);
