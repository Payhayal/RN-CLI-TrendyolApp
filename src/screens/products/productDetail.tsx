import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Alert,
} from 'react-native';
import COLORS from '../../theme/colors';
import {height, width} from '../../utils/constants';
import {convertPrice} from '../../utils/functions';
import Button from '../../components/ui/button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {updateCart} from '../../store/actions/cartActions';
import {AppDispatch} from '../../store';

const ProductDetail: React.FC = ({route}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {item} = route?.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          <Image style={styles.image} source={{uri: item?.image}} />
          <Text style={styles.title}>{item?.title}</Text>
          <View style={styles.rateContainer}>
            <Text style={styles.rate}>{item?.rating?.rate} |</Text>
            <Ionicons size={20} color={COLORS.YELLOW} name="star" />
          </View>
          <Text style={styles.description}>{item?.description}</Text>
          <View></View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{convertPrice(item?.price)} </Text>
          <Text style={styles.shipping}>Free Shipping</Text>
        </View>
        <View style={styles.cartContainer}>
          <Button
            onPress={() => Alert.alert('Do you want to buy this product?')}
            buttonType="outline"
            title={'Buy Now'}
          />
          <Button
            onPress={() =>
              dispatch(
                updateCart({
                  userId: 2,
                  date: '2019 - 12 - 10',
                  products: [{productId: item?.id, quantity: 1}],
                }),
              )
            }
            buttonType="full"
            title={'Add to Cart'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.BLACK,
    marginVertical: 10,
  },
  rate: {
    fontSize: 16,
    fontWeight: '500',
  },
  rateContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    gap: 5,
  },
  description: {
    color: COLORS.GRAY,
    fontWeight: '400',
    fontSize: 16,
  },
  bottomContainer: {
    height: height * 0.08,
    flexDirection: 'row',
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderColor: COLORS.INPUTCOLOR,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: COLORS.PRIMARY,
    fontSize: 18,
    fontWeight: '500',
  },
  shipping: {
    color: COLORS.GREEN,
    fontSize: 12,
    fontWeight: '600',
    marginVertical: 5,
  },
  cartContainer: {
    flex: 3,
    flexDirection: 'row',
  },
});

export default ProductDetail;
