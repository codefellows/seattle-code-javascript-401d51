import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      return [...state, action.payload];
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.name !== action.payload.name);
    },
  }
})

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
