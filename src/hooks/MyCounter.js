import React, { createContext, useState } from "react";

export const MyProvider = createContext();

export const RajaProvider = ({ children }) => {
  const [isCount, setIsCount] = useState(0);

  const countHandler = () => {
    setIsCount(isCount + 1);
  };

  let love = " i love you..... ";
  return (
    <MyProvider.Provider value={{ love, isCount, countHandler }}>
      {children}
    </MyProvider.Provider>
  );
};
