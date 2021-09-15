import React, { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // state variables
  const [chip, setChip] = useState(0);

  return (
    <GlobalContext.Provider value={{ chip, setChip }}>
      {children}
    </GlobalContext.Provider>
  );
};
