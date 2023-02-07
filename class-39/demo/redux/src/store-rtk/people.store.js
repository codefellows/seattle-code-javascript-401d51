import { createSlice } from '@reduxjs/toolkit'

const peopleSlice = createSlice({
  name: 'people',
  initialState: [
    { name: 'Mary' },
    { name: 'Bob' },
    { name: 'Jill' },
  ],
  reducers: {
    add(state, action) {
      console.log(state, action);
      state.push({ name: action.payload })
    },
    remove(state, action) {
      return state.filter(person => person.name !== action.payload)
    },
  }
});

export const { add, remove } = peopleSlice.actions

export const get = () => async dispatch => {
  console.log('getting');
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const people = await response.json();
  people.results.forEach(person => dispatch(add(person.name)))
}

export default peopleSlice.reducer;

