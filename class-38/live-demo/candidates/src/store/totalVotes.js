const initialState = 0;


const totalVotesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'DECREMENT':
      newState = state - 1;
      return newState;
    case 'INCREMENT':
       newState = state + 1;
      return newState;
    default:
      return state
  }
};

export default totalVotesReducer;
