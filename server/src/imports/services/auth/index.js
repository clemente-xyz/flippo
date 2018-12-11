import { User } from "../../collections";
import jwt from "jsonwebtoken";
import constants from "../../config/Constants";

export async function requireAuth(user) {
  if (!user || !user._id) {
    throw new Error("Unauthorized user!");
  }

  const me = await User.findById(user._id);

  if (!me) {
    throw new Error("Unauthorized user!");
  }

  return me;
}

export function decodeToken(token) {
  const arr = token.split(" ");

  if (arr[0] === "Bearer") {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error("Invalid token!");
}
