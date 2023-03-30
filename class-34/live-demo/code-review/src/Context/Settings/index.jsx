import React, { useEffect, useState } from 'react';

// create context ---------
export const SettingsContext = React.createContext();

// create provider--------
const SettingsProvider = ({ children }) => {
  // 3 pieces in state:  sort, showComplete, displayCount
  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const saveLocally = () => {
    localStorage.setItem('todo-1', JSON.stringify({ displayCount, showComplete, sort }))
  }

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo-1'));
    if (storage) {
      setShowComplete(storage.showComplete);
      setDisplayCount(storage.displayCount);
      setSort(storage.sort);
    }
  }, []);


  const values = {
    displayCount,
    showComplete,
    sort,
    setShowComplete,
    setDisplayCount,
    setSort,
    saveLocally
  }

  return (
    // programmatically create the wrapper
    // we "create" context for the said provider------
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

};

export default SettingsProvider;
