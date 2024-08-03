import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  BESTSELLER_PRODUCT_URL,
  CATEGORY_URL,
  NEWARRIVAL_PRODUCT_URL,
} from '../../service/ulrs';

const getProducts = createAsyncThunk(
  'products/getProducts',
  async (params: object) => {
    const response = await getRequest(
      `${CATEGORY_URL}/${params.category}`,
      params,
    );
    return await response.data;
  },
);
const getNewArrivalProducts = createAsyncThunk(
  'products/getNewArrivalProducts',
  async (params: object) => {
    const response = await getRequest(NEWARRIVAL_PRODUCT_URL, params);
    return await response.data;
  },
);
const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const response = await getRequest(BESTSELLER_PRODUCT_URL, params);
    return await response.data;
  },
);
export {getProducts, getNewArrivalProducts, getBestSellerProducts};
