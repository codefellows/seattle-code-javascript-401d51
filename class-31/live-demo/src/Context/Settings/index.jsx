import React, { useState } from 'react';

// create context
export const SettingsContext = React.createContext();

// create a provider
const SettingsProvider = ({ children }) => {

  const [title, setTitle] = useState('Some Site');
  const [email, setEmail] = useState('ryan@xyz.com');

  //can "do the thing" here to make calculations, useReducer, change state
  
  const values = {title, email};

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

};

export default SettingsProvider;
