import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    }
  }
})

export const getProducts = (activeCategory) => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  // lets filter AND THEN dispatch // on activeCategory change! (useEffect)
  let records = response.data.results.filter(product => product.category === activeCategory)
  dispatch(setProducts(records));
}

export const adjustInventory = (product) => async (dispatch, getState) => {
  product = {...product, inStock: product.inStock - 1};
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);

  let updatedProducts = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  // lets filter AND THEN dispatch // on activeCategory change! (useEffect)
  let records = updatedProducts.data.results.filter(item => item.category === response.data.category);
  dispatch(setProducts(records));
}

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
