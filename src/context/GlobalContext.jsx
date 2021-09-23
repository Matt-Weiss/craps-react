import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // state variables
  const [chip, setChip] = useState(0);
  const [roll, setRoll] = useState(0);
  const [bank, setBank] = useState(1000);

  return (
    <GlobalContext.Provider
      value={{ chip, setChip, roll, setRoll, bank, setBank }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
