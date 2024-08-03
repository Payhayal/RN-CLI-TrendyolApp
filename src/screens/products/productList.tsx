import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../store/actions/productActions';
import ProductItem from '../../components/products/productItem';
import {width} from '../../utils/constants';
import COLORS from '../../theme/colors';
import Spinner from '../../components/ui/spinner';
import {AppDispatch, RootState} from '../../store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const ProductList: React.FC = ({route}) => {
  const {category} = route?.params;
  const dispatch = useDispatch<AppDispatch>();
  const {products, pending} = useTypedSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts({sort: 'asc', category: category}));
  }, []);

  return (
    <View style={styles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => (
            <ProductItem
              item={item}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              style={styles.productItem}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    width: width * 0.48,
    margin: 3,
    borderWidth: 1,
    borderColor: COLORS.INPUTCOLOR,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    padding: 10,
  },
});

export default ProductList;
