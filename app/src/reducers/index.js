import { combineReducers } from "redux";
import user from "./User";

export default client =>
  combineReducers({
    apollo: client.reducer(),
    user
  });
