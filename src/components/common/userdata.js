// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setuser] = useState('Initial Data');

  const updateData = newData => {
    setuser(newData);
  };

  return (
    <DataContext.Provider value={{ user, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
