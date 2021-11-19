export function enableLoadingSpinnerModalAction() {
  console.log("ACTION!!")
  return {
    type: "ENABLE_LOADING_SPINNER_MODAL",
  };
}

export function disableLoadingSpinnerModalAction() {
  return {
    type: "DISABLE_LOADING_SPINNER_MODAL",
  };
}
