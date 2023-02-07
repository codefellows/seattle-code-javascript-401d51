import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SiteProvider(props) {
  const [title, setTitle] = useState('Daily Dose of Code');
  const [twitter, setTwitter] = useState('DailyDoseOfCode');

  const changeTitleAndTwitter = (str) => {
    setTitle(str);
    let handle = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    setTwitter(handle);
  }

  let exportedValues = {
    title,
    twitter,
    changeTitleAndTwitter,
  }

  return (
    <SiteContext.Provider value={exportedValues}>
      {props.children}
    </SiteContext.Provider>
  );
}

export default SiteProvider;
