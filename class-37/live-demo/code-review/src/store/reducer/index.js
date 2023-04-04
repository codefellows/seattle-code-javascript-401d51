let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics are cool.' },
    { name: 'food', displayName: 'Food', description: 'Food is cool.'},
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing is cool.' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: ''
};

const reducer = (state=initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'SET':
      return {
        ...state,
        activeCategory: payload,
        products: initialState.products.filter(product => product.category === payload.name),
      };
    case 'RESET':
      return initialState;
    default: 
      return state;
  }
};

// actions
export const set = (category) => {
  return {
    type: 'SET',
    payload: category,
  }
}

export default reducer;
