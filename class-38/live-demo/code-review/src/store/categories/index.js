let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics are cool.' },
    { name: 'food', displayName: 'Food', description: 'Food is cool.'},
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing is cool.' },
  ],
  activeCategory: ''
};

const categoryReducer = (state=initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'SET':
      return {
        ...state,
        activeCategory: payload,
      };
    case 'RESET':
      return initialState;
    default: 
      return state;
  }
};



export default categoryReducer;
