import { useReducer, useState } from 'react';

export const initialState = {
  name: 'Sesame Street Characters',
  characters: ['Big Bird', 'Elmo'],
};

// example action:
// {
//   type: 'ADD'
//   payload: 'Cookie Monster' 
// }

export const characterReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD':
      return {...state, characters: [...state.characters, action.payload]};
    case 'REMOVE':
      return {...state, characters: state.characters.filter(character => character !== action.payload)};
    default:
      return state;
  }
};

const Characters = () => {
  // const [name, setName] = useState('Sesame Street Characters');
  // const [characters, setCharacters] = useState(['Big Bird', 'Elmo']);
  const [input, setInput] = useState('');
  const [state, dispatch] = useReducer(characterReducer, initialState);

  const addCharacter = () => {
    // setCharacters([...characters, input])
    let action = {
      type: 'ADD',
      payload: input,
    };
    dispatch(action);
  }

  const removeCharacter = () => {
    // setCharacters(characters.filter(character => character !== input))
    let action = {
      type: 'REMOVE',
      payload: input,
    };
    dispatch(action);
  }

  return (
    <>
      <h1>{state.name}</h1>
      <input onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addCharacter}>Add Character</button>
      <button onClick={removeCharacter}>Remove Character</button>

      <ul>
        {
          state.characters.map((character, idx) => (
            <li key={`characters-${idx}`}>{character}</li>
          ))
        }
      </ul>
    </>
  )
};

export default Characters;
