import { combineReducers } from "redux";

import chatMessageReducer from "./chatMessage";
import memberUserInfoReducer from "./memberUserInfo";

export default combineReducers({
  chatMessageReducer,
  memberUserInfoReducer,
});
