import React, {useEffect, useState} from 'react';
import {Pressable, Text, StyleSheet, Image, View} from 'react-native';
import {Cart} from '../../models/home/cart';
import {height, width} from '../../utils/constants';
import {PRODUCT_URL} from '../../service/ulrs';
import {getRequest} from '../../service/verbs';
import COLORS from '../../theme/colors';
import {convertPrice} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {setTotalPrice} from '../../store/slice/cartSlice';
import {RootState} from '../../store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const CartItem: React.FC<Cart> = ({item}) => {
  const dispatch = useDispatch();
  const {cart} = useTypedSelector(state => state.cart);
  const navigation = useNavigation();
  const [product, setProduct] = useState<object>({});

  useEffect(() => {
    const productUrl: string = `${PRODUCT_URL}/${item?.productId}`;
    getRequest(productUrl).then(res => {
      console.log(productUrl);
      setProduct(res?.data);
      dispatch(setTotalPrice(res?.data?.price));
    });
  }, [cart]);

  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: product})}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: product?.image}} />
      </View>
      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {product?.title}
        </Text>
        <Text style={styles.count}>Count : {product?.rating?.count}</Text>
        <Text style={styles.shipping}>Free Shipping</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{convertPrice(product?.price)}</Text>
          <Text style={styles.price}>{JSON.stringify(item)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: COLORS.INPUTCOLOR,
  },
  imageContainer: {
    padding: 10,
  },
  image: {
    width: width * 0.3,
    height: height * 0.12,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  count: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.GRAY,
    marginTop: 5,
  },
  shipping: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.GREEN,
    marginTop: 5,
  },
  priceContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.PRIMARY,
    marginTop: 5,
  },
});

export default CartItem;
