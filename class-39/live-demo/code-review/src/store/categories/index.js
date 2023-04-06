let initialState = {
  categories: [],
  activeCategory: ''
};

const categoryReducer = (state=initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'SET-CATEGORY':
      return {
        ...state,
        categories: payload
      }
    case 'SELECT':
      return {
        ...state,
        activeCategory: payload,
      };
    default: 
      return state;
  }
};



export default categoryReducer;
