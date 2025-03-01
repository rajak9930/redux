import React, { useReducer, createContext } from "react";

export const CounterContext = createContext();

const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, disPatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, disPatch }}>
      {children}
    </CounterContext.Provider>
  );
};
