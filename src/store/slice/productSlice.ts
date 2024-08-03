import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  getBestSellerProducts,
  getNewArrivalProducts,
  getProducts,
} from '../actions/productActions';
import {Product, ProductsTypes} from '../../models/home/products';

const initialState: ProductsTypes = {
  products: [],
  newArrival: [],
  bestSeller: [],
  pending: false,
  error: null,
};
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.pending = false;
        },
      )
      .addCase(getProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message as string;
      })
      .addCase(getNewArrivalProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getNewArrivalProducts.fulfilled,
        (state, action: PayloadAction<object[]>) => {
          state.newArrival = action.payload;
        },
      )
      .addCase(getNewArrivalProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message as string;
      })
      .addCase(getBestSellerProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getBestSellerProducts.fulfilled,
        (state, action: PayloadAction<object[]>) => {
          state.bestSeller = action.payload;
        },
      )
      .addCase(getBestSellerProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message as string;
      });
  },
});

export default productsSlice.reducer;
