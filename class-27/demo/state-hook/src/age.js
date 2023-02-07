import React from 'react';
import { useState } from 'react';

function Age(props) {

  const [name, setName] = useState('someone');
  const [age, setAge] = useState(props.age || 0);

  // what happens if we just do this? Why?
  // setAge(props.age);

  // Or, we can just set it and forget it
  // setAge(55);

  // Can we just change it directly? Why do we need that function?
  // ++age;

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h2 data-testid="name">{name} is {age}</h2>
      <input data-testid="name-input" onChange={handleChange} />
    </div>
  );
}

export default Age;
