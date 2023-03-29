import React, { useState } from 'react';

// create context
export const SettingsContext = React.createContext();

// create a provider
const SettingsProvider = ({ children }) => {

  const [title, setTitle] = useState('Some Site');
  const [email, setEmail] = useState('ryan@xyz.com');
  const [staff, setStaff] = useState([
    {name: 'Ryan', position: 'Lead Instructor'},
    {name: 'JB', position: 'Principle Instructor'},
  ]);

  //can "do the thing" here to make calculations, useReducer, change state
  const addStaff = (staffMember) => {
    //validation if necessary, list of approved positions maybe? 
    setStaff([...staff, staffMember]);
  };
  
  const values = {
    title, 
    email, 
    staff,
    setEmail,
    addStaff,
  };

  return (
    // this is the component we use to "wrap" the children and provide context 
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )

};

export default SettingsProvider;
