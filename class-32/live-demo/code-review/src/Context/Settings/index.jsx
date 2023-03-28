import React, { useState } from 'react';

// create context ---------
export const SettingsContext = React.createContext();

// create provider--------
const SettingsProvider = ({ children }) => {
  // 3 pieces in state:  sort, showComplete, displayCount
  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState(false);
  const [sort, setSort] = useState('difficulty');


  const values = {
    displayCount,
    showComplete,
    sort,
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
