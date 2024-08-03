import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {getCarts} from '../../store/actions/cartActions';
import COLORS from '../../theme/colors';
import Button from '../../components/ui/button';
import {convertPrice} from '../../utils/functions';
import {height} from '../../utils/constants';
import CartItem from '../../components/cart/cartItem';
import Spinner from '../../components/ui/spinner';
import {AppDispatch, RootState} from '../../store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {cart, pending, totalPrice} = useTypedSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCarts({userId: '2'}));
  }, []);

  return (
    <View style={styles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={cart}
          renderItem={({item}) => <CartItem item={item} />}
        />
      )}
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.total}>Subtotal :</Text>
          <Text style={styles.price}>{convertPrice(totalPrice)} </Text>
        </View>
        <View style={styles.cartContainer}>
          <Button buttonType="full" title={'Proceed to Checkout'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    height: height * 0.08,
    flexDirection: 'row',
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderColor: COLORS.INPUTCOLOR,
    paddingBottom: 7,
    backgroundColor: COLORS.WHITE,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: COLORS.BLACK,
    fontSize: 18,
    fontWeight: '500',
  },
  total: {
    color: COLORS.BLACK,
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 5,
  },
  cartContainer: {
    flex: 2,
    flexDirection: 'row',
  },
});

export default Cart;
