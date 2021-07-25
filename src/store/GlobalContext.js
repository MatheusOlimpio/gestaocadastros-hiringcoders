import React, { useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState();

  useEffect(() => {
    if (window.localStorage.cart) {
      setDados((dados) => Object.values(JSON.parse(window.localStorage.cart)));
    }
  }, [])

  return (
    <GlobalContext.Provider value={{ dados, setDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
