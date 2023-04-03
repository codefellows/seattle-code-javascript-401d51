import votesReducer from './votes';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { incrementVote, decrementVote, reset } from './votes';

describe('Vote Reducer', () => {
  // combine reducers
  const reducers = combineReducers({
    votes: votesReducer,
  });

  //create a store to provide state
  const store = createStore(reducers);

  test('delivers initial state', () => {
    let state = store.getState();

    expect(state.votes.totalVotes).toEqual(0);
    expect(state.votes.candidates.length).toEqual(3);
    expect(state.votes.candidates[0].name).toEqual('Peter');
    expect(state.votes.candidates[0].votes).toEqual(0);
  })

  test('increment candidate votes', () => {
    let state = store.getState();
    let { candidates } = state.votes;

    store.dispatch(incrementVote(candidates[2]));
    let newState = store.getState();

    expect(newState.votes.totalVotes).toEqual(1);
    expect(newState.votes.candidates[2].name).toEqual('Mary');
    expect(newState.votes.candidates[2].votes).toEqual(1);
  })

});
