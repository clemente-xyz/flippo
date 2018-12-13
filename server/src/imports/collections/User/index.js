import mongoose, { Schema } from "mongoose";
import { hashSync, compareSync } from "bcrypt-nodejs";
import jwt from "jsonwebtoken";
import constants from "../../config/Constants";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      minlength: [5, "Password must have more than 5 chars :)"]
    },
    firstname: String,
    lastname: String,
    birth: String,
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
  },

  createToken() {
    return jwt.sign(
      {
        _id: this._id
      },
      constants.JWT_SECRET
    );
  }
};

export default mongoose.model("User", UserSchema);
