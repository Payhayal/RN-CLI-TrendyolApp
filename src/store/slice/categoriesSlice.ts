import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {getCategories} from '../actions/categoriesActions';
import {CategoriesTypes} from '../../models/home/Categories';

const initialState: CategoriesTypes = {
  categories: [],
  selectedCategory: 'electronics',
  pending: false,
  error: null,
};
const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<object[]>) => {
          state.categories = action.payload;
        },
      )
      .addCase(getCategories.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error.message as string;
      });
  },
});

export const {changeCategory} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
