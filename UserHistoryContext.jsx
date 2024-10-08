import React, { createContext, useContext, useState } from 'react';

const UserHistoryContext = createContext();

export const useUserHistory = () => {
  return useContext(UserHistoryContext);
};

export const UserHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (path) => {
    setHistory((prev) => [...prev, path]);
  };

  return (
    <UserHistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </UserHistoryContext.Provider>
  );
};