import axios from 'axios';

// actions
export const select = (category) => {
  return {
    type: 'SELECT',
    payload: category,
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD-PRODUCT',
    payload: product
  }
}

export const removeProduct = (product) => {
  return {
    type: 'REMOVE-PRODUCT',
    payload: product,
  }
}

export const setProduct = (data) => {
  return {
    type: 'SET-PRODUCT',
    payload: data,
  }
}

export const setCategory = (data) => {
  return {
    type: 'SET-CATEGORY',
    payload: data,
  }
}

export const updateProduct = (product) => {
  return {
    type: 'UPDATE-PRODUCT',
    payload: product
  }
}

export const get = (endpoint) => async (dispatch, getState) => {
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/${endpoint}`);

  if (endpoint === 'products'){
    dispatch(setProduct(response.data.results))
  }
  if (endpoint === 'categories'){
    dispatch(setCategory(response.data.results))
  }
}

export const adjustInventory = (product) => async (dispatch, getState) => {
  product.inStock--;
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  dispatch(updateProduct(response.data))
}
