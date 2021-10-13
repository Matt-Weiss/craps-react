import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // state variables
  const [chip, setChip] = useState(0);
  const [bank, setBank] = useState(1000);

  function resolveRoll (roll) {
    
  }
  
  return (
    <GlobalContext.Provider
      value={{ chip, setChip, bank, setBank, resolveRoll }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
