//1- criar context

import { createContext, useContext } from "react";

export const {CounterContext} = createContext();

//2 - criar provider

export const CounterContextProvider = ({ children }) => {
  const {counter, setCounter} = useContext(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
