import React, {useReducer} from 'react';
import Chance from 'chance';

const chance = new Chance();
const initialState = {
  show: 'Sesame Street' ,
  characters: [],
  active: {}
};

/*
  Actions are objects that contain 2 properties:

  type: a verb ... the thing you want to do
  payload: a noun ... the actual data that you want to use to calculate
*/

// we "dispatch" actions. Basically telling react, I want you to take this action object and "do the right thing" with it
// A "reducer" is the thing that actions get "dispatched to" and can pick them apart and do the right thing
// Reducers always start with the current state and return the next state

function characterReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_CHARACTER':
      return { ...state, active:{}, characters: [...state.characters, action.payload] };
    case 'REMOVE_CHARACTER':
      return { ...state, active:{}, characters: state.characters.filter(char => char.name !== action.payload) }
    case 'ACTIVATE_CHARACTER':
      return { ...state, active: state.characters.filter( char => char.name === action.payload)[0] }
    default:
      return state;
  };
}

function Characters() {

  const [state, dispatch] = useReducer(characterReducer, initialState);

  function handleNewCharacter() {
    const character = {
      name: chance.name(),
      color: chance.color(),
    };

    const action = {
      type: 'ADD_CHARACTER',
      payload: character
    };
    dispatch(action);
  }

  function handleActivateCharacter(name) {
    const action = {
      type: 'ACTIVATE_CHARACTER',
      payload: name
    };
    dispatch(action)
  }

  function handleDeleteCharacter(name) {
    const action = {
      type: 'REMOVE_CHARACTER',
      payload: name
    };
    dispatch(action)
  }

  return (
    <>
      <h1>Characters in {state.show}</h1>
      <strong>
        {
          state.active.name ? `${state.active.name} is ${state.active.color}` : "Click a character to learn their secret"
        }
      </strong>
      <ul>
        {
          state.characters.map( char =>
            <li onClick={() => handleActivateCharacter(char.name)} onDoubleClick={() => handleDeleteCharacter(char.name)} key={char.name}>{char.name}</li>
          )
        }
      </ul>
      <button onClick={handleNewCharacter}>Add Random Character</button>
    </>
  );
}


export default Characters;
