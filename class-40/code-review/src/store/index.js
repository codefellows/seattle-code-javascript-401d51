import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';

const reducers = {
  products: productsReducer,
  categories: categoryReducer,
  cart: cartReducer,
};

const store = () => configureStore({reducer: reducers});

export default store();
