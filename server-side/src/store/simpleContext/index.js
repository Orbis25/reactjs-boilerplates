import React, { createContext, useState } from "react";

export const SimpleContext = createContext({ count: 0, setCount: () => {} });

export const SimpleProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <SimpleContext.Provider value={{ count, setCount }}>
      {children}
    </SimpleContext.Provider>
  );
};
