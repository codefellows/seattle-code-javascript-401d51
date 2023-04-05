import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import votesReducer from './votes';
import candidatesReducer from './candidates';
import totalVotesReducer from './totalVotes';
// import logger from './middleware/logger';
import thunk from './middleware/thunk';
// import thunk from 'redux-thunk';
import todoReducer from './todo';

let reducers = combineReducers({
  // votes: votesReducer,
  candidates: candidatesReducer,
  totalVotes: totalVotesReducer,
  todoList: todoReducer
});

// this can be done multiple ways
const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

// store must be called somewhere.  here or in react root index.js
export default store();
