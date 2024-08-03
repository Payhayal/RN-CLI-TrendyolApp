import productsSlice from './slice/productSlice';
import categoriesSlice from './slice/categoriesSlice';
import cartSlice from './slice/cartSlice';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  products: productsSlice,
  categories: categoriesSlice,
  cart: cartSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
