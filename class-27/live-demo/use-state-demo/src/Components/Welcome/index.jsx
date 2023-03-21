import { useState } from 'react';
import Heading from '../Heading';
import './styles.scss';

const Welcome = () => {
  const [name, setName] = useState('World');
  // const [age, setAge] = useState();

  return (
    <>
      <h1 data-testid="h1"> Hello {name}</h1>
      {/* <Heading name={name} setName={setName} /> */}
      <Heading name={name} />
      <input data-testid="input" onChange={(e) => setName(e.target.value)} />
    </>
  )
};

export default Welcome;
