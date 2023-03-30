import React, { useState } from 'react';

// create context
export const ModeContext = React.createContext();

// create a provider
const ModeProvider = ({children}) => {
  const [mode, setMode] = useState('dark');

  const values = { mode }

  return (
    // establish context within said provider
    <ModeContext.Provider value={values}>
      {children}
    </ModeContext.Provider>
  )
};

export default ModeProvider;

