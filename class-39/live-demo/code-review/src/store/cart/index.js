const initialState = [];

const cartReducer = (state=initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'ADD-PRODUCT':
      return [...state, payload];
      case 'REMOVE-PRODUCT':
        return state.filter(product => product.name !== payload.name);
    default:
      return state
  }
};

export default cartReducer;
