import React from 'react';

export const SiteContext = React.createContext();

function SiteProvider(props) {

  const state = {
    title: 'My Amazing Website',
    twitter: 'amazingness',
  };

  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  );
}

export default SiteProvider;
