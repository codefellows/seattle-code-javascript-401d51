import { createSlice } from '@reduxjs/toolkit';

const totalVotesSlice = createSlice({
  name: 'totalVotes',
  initialState: 0,
  reducers: {
    incrementTotal: (state, action) => {
      return state + 1;
    },
    decrementTotal: (state, action) => {
      return state - 1;
    }
  }
})

export const { incrementTotal, decrementTotal } = totalVotesSlice.actions
export default totalVotesSlice.reducer;
