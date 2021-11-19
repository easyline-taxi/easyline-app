const INITIAL_STATE = {
  modalEnabled: false,
};

export default function LoadingSpinnerModalReducer(state = INITIAL_STATE, action) {
  if (action.type === "ENABLE_LOADING_SPINNER_MODAL") {
    return { ...state, modalEnabled: true };
  } else if (action.type === "DISABLE_LOADING_SPINNER_MODAL") {
    return { ...state, modalEnabled: false };
  }

  return state;
}
