import { initialState, characterReducer } from '.';

describe('Character Reducer', () => {
  it ('displays initialState, adds, and removes as expected', () => {
    let state = characterReducer(initialState, {});

    expect(state.name).toEqual('Sesame Street Characters');
    expect(state.characters).toEqual(['Big Bird', 'Elmo']);

    state = characterReducer(state, {type: 'ADD', payload: 'test'});
    expect(state.characters.includes('test')).toBeTruthy()

    state = characterReducer(state, {type: 'REMOVE', payload: 'test'});
    expect(state.characters.includes('test')).toBeFalsy();

  })
})
