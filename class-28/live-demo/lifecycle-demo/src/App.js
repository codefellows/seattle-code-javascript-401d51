import { useEffect, useState } from 'react';
import axios from 'axios';
import Content from './Components/Content';

function App() {
  const [name, setName] = useState('World');
  const [data, setData] = useState([]);
  const [showContent, setShowContent] = useState(false);


  // greedy effect - occurs EVERY time an event occurs
  // takes a callback as an argument
  useEffect(() => {
    console.log('An event occurred');
  });

  // trigger an event when state "name" is changed
  // takes a callback AND an array with the state variable I want to monitor
  useEffect(() => {
    console.log('Name State was changed');
  }, [name]);

  // trigger an event on component mount
  // takes a callback AND an EMPTY array
  useEffect(() => {
    console.log('component mounted ONCE!!!');
    async function getData() {
      let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setData(response.data.results);
    }
    getData();
  }, []); // sometimes the tools are not helpful!  we do not need data in the array

  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={() => setName('All')}>Change Greeting</button>
      <button onClick={() => setName('You')}>Change Greeting Again</button>
      <button onClick={() => setShowContent(!showContent)}>Show Content</button>
      {showContent && <Content />}
      <ul>
        {
          data.length ?
            data.map((pokemon, index) => (
              <li key={`li-${index}`}>{pokemon.name}</li>
            )) : ''
        }

      </ul>

    </>
  );
}

export default App;
