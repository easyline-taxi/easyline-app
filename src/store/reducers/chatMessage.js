const INITIAL_STATE = {
  currentSendingMessage: "",
};

export default function chatMessageReducer(state = INITIAL_STATE, action) {
  if (action.type === "SEND_MESSAGE") {
    return { ...state, currentSendingMessage: action.message };
  }

  return state;
}
 