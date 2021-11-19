import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

const loadingSpinnerModalManagerContext = createContext({});

export const LoadingSpinnerModalManagerProvider = ({ children }) => {
  const dispatch = useDispatch();

  function enableLoadingSpinnerModal() {
    dispatch({ type: "ENABLE_LOADING_SPINNER_MODAL" });
  }

  function disableLoadingSpinnerModal() {
    dispatch({ type: "DISABLE_LOADING_SPINNER_MODAL" });
  }

  return (
    <loadingSpinnerModalManagerContext.Provider
      value={{ enableLoadingSpinnerModal, disableLoadingSpinnerModal }}
    >
      {children}
    </loadingSpinnerModalManagerContext.Provider>
  );
};

export function useLoadingSpinnerModalManager() {
  const context = useContext(loadingSpinnerModalManagerContext);

  return context;
}

export default LoadingSpinnerModalManagerProvider;
