const initialState = [];

const cartReducer = (state=initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'ADD-PRODUCT':
      return [...state, payload];
    default:
      return state
  }
};

export default cartReducer;
