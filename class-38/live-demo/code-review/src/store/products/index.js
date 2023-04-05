const initialState = [
  { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
  { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
  { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
  { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
  { name: 'Apples', category: 'food', price: .99, inStock: 500 },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
];

let tempState = [...initialState];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET':
      return initialState.filter(product => product.category === payload.name)
    case 'ADD-PRODUCT':
      // if this isn't perfect for lab 37, that's ok.  
      let activeCategory = payload.category;
      console.warn(activeCategory)

      // change temp state.  what ever the inventory WAS we adjust it AND THEN because itt is globally scoped, we can adjust it AGAIN
      tempState = tempState.map(product => product.name === payload.name ? {...product, inStock: product.inStock - 1} : product)

      let results = tempState.filter(product => product.category === activeCategory);
      console.log('is inventory correct for all categories?', tempState);
      console.log(results);
     
      return results
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default productsReducer;
