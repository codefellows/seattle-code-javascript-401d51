import { createSlice } from '@reduxjs/toolkit';

const candidateSlice = createSlice({
  name: 'candidates',
  initialState: [
    { _id: '111', name: 'Peter', votes: 0 },
    { _id: '222', name: 'Paul', votes: 0 },
    { _id: '333', name: 'Mary', votes: 0 },
  ],
  reducers: {
    incrementIndVotes: (state, action) => {
      return state.map(candidate => candidate.name === action.payload.name ? { name: candidate.name, votes: candidate.votes + 1 } : candidate);
    },
    decrementIndVotes: (state, action) => {
      return state.map(candidate => candidate.name === action.payload.name ? { name: candidate.name, votes: candidate.votes - 1 } : candidate);
    }
  }
});

export const { incrementIndVotes, decrementIndVotes } = candidateSlice.actions;
export default candidateSlice.reducer;
