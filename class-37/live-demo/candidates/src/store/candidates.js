const initialState = [
  {name: 'Peter', votes: 0},
  {name: 'Paul', votes: 0},
  {name: 'Mary', votes: 0},
];

const candidatesReducer = (state=initialState, action) => {
  switch(action.type){
    case 'DECREMENT':
      return state.map(candidate => candidate.name === action.payload.name ? {name: candidate.name, votes: candidate.votes - 1} : candidate);
      case 'INCREMENT': 
        return state.map(candidate => candidate.name === action.payload.name ? {name: candidate.name, votes: candidate.votes + 1} : candidate);
    default:
      return state
  }
}

export default candidatesReducer;
