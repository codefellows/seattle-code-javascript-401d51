import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';
import logger from './middleware/logger';

const reducers = combineReducers({
  products: productsReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(logger)));

export default store();
