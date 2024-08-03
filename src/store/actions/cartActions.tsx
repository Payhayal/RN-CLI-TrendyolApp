import {createAsyncThunk} from '@reduxjs/toolkit';
import {CARTS_URL, CART_URL} from '../../service/ulrs';
import {getRequest, updateRequest} from '../../service/verbs';
import {GetCartParams, UpdateCartParams} from '../../models/home/cart';
import {Alert} from 'react-native';

const getCarts = createAsyncThunk(
  'cart/getCarts',
  async ({params, userId}: GetCartParams) => {
    const response = await getRequest(`${CARTS_URL}${userId}`, params);
    return await response?.data[0]?.products;
  },
);
const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({userId, date, products}: UpdateCartParams) => {
    const response = await updateRequest(`${CART_URL}${userId}`, {
      date,
      products,
    });
    if (response.status == 200) {
      Alert.alert(
        'Information',
        'The product was added to the cart successfully!',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Ok',
            onPress: () => console.log('Ok Pressed'),
            style: 'default',
          },
        ],
      );
    }
    return await response?.data?.products[0];
  },
);
export {getCarts, updateCart};
