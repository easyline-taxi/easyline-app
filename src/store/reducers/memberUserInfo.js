const INITIAL_STATE = {};

export default function memberUserInfoReducer(state = INITIAL_STATE, action) {
  if (action.type === "SET_USER_INFO") {
    return { ...state, data: action.payload };
  }

  return state;
}
