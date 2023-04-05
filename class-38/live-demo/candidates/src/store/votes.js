const initialState = {
  candidates: [
    {name: 'Peter', votes: 0},
    {name: 'Paul', votes: 0},
    {name: 'Mary', votes: 0},
  ],
  totalVotes: 0,
}

function votesReducer(state = initialState, action){
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        candidates: state.candidates.map(candidate => {
          if(candidate.name === action.payload.name){
            return {
              name: candidate.name,
              votes: candidate.votes + 1,
            }
          }
          return candidate;
        }),
        totalVotes: state.totalVotes + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        candidates: state.candidates.map(candidate => candidate.name === action.payload.name ? {name: candidate.name, votes: candidate.votes -1} : candidate),
        totalVotes: state.totalVotes -1,
      }
    case 'RESET':
      return initialState;
    default:
      return state
  }
}



export default votesReducer;
