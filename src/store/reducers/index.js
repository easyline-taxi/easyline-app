import { combineReducers } from "redux";

import chatMessageReducer from "./chatMessage";
import memberUserInfoReducer from "./memberUserInfo";
import LoadingSpinnerModalReducer from "./loadingSpinnerModal";

export default combineReducers({
  chatMessageReducer,
  memberUserInfoReducer,
  LoadingSpinnerModalReducer
});
