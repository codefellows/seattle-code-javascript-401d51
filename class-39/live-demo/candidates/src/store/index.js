import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from './candidates';
import totalVotesReducer from './totalVotes';
import todoReducer from './todo';

const store = () => configureStore({
  reducer: {
    candidates: candidatesReducer,
    totalVotes: totalVotesReducer,
    todoList: todoReducer,
  }
})

export default store();
