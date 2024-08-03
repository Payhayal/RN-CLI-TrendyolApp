import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/ulrs';

const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const response = await getRequest(CATEGORIES_URL, {});
  return await response.data;
});

export {getCategories};
