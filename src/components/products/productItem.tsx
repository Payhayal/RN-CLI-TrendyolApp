import React from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {ProductItemProps} from '../../models/components/productItem';
import {height, width} from '../../utils/constants';
import COLORS from '../../theme/colors';
import {convertPrice} from '../../utils/functions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

const ProductItem: React.FC<ProductItemProps> = ({
  price,
  title,
  description,
  image,
  style,
  item,
}) => {
  const navigation: any = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={style ? style : styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.description}>
        {description}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{convertPrice(price)} </Text>
      </View>
      <Pressable style={styles.favoriteBtn}>
        <Ionicons size={25} name="heart-outline" color={COLORS.PRIMARY} />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.5,
    margin: 10,
    borderWidth: 1,
    borderColor: COLORS.INPUTCOLOR,
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: width * 0.35,
    height: height * 0.12,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.BLACK,
    marginVertical: 5,
  },
  description: {
    color: COLORS.GRAY,
    fontWeight: '300',
    fontSize: 14,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  price: {
    color: COLORS.PRIMARY,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
  },
  favoriteBtn: {
    position: 'absolute',
    right: 6,
    top: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderWidth: 1,
    padding: 4,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderColor: COLORS.INPUTCOLOR,
    backgroundColor: COLORS.LIGHTGRAY,
  },
});

export default ProductItem;
