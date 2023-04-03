import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import votesReducer from './votes';

let reducers = combineReducers({
  votes: votesReducer,
});

// this can be done multiple ways
const store = () => {
  return createStore(reducers, composeWithDevTools());
}

// store must be called somewhere.  here or in react root index.js
export default store();
