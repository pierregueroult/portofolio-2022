import { createContext, useContext, useReducer } from "react";
import React from "react";

const initialAppState = {
  navHeight: 0,
  loadingStep: 0,
};

const AppStateContext = createContext(initialAppState);
const DispatchStateContext = createContext(undefined);
export const useAppState = () => [
  useContext(AppStateContext),
  useContext(DispatchStateContext),
];

export default function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    initialAppState
  );
  return (
    <AppStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </AppStateContext.Provider>
  );
}
