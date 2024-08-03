import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {getCarts, updateCart} from '../actions/cartActions';
import {Cart, CartTypes} from '../../models/home/cart';

const initialState: CartTypes = {
  cart: [],
  pending: false,
  error: null,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      state.totalPrice += Math.floor(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCarts.pending, state => {
        state.pending = true;
      })
      .addCase(getCarts.fulfilled, (state, action: PayloadAction<Cart[]>) => {
        state.cart = action.payload;
        state.pending = false;
      })
      .addCase(getCarts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message as string;
      })
      .addCase(updateCart.pending, state => {
        state.pending = true;
      })
      .addCase(updateCart.fulfilled, (state, action: PayloadAction<T>) => {
        state.cart = [...state.cart, action.payload];
        state.pending = false;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message as string;
      });
  },
});
export const {setTotalPrice} = cartSlice.actions;
export default cartSlice.reducer;
