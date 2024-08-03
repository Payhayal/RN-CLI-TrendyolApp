import React, {useEffect} from 'react';
import {Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import widgets from '../../widgets/widgets.json';
import Categories from '../../widgets/categories';
import BestSeller from '../../widgets/bestSeller';
import Introduction from '../../widgets/introduction';
import NewArrival from '../../widgets/newArrival';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
  getBestSellerProducts,
  getNewArrivalProducts,
  getProducts,
} from '../../store/actions/productActions';
import {getCategories} from '../../store/actions/categoriesActions';
import SpecialForYou from '../../widgets/specialForYou';
import {getCarts} from '../../store/actions/cartActions';
import {RootState} from '../../store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {selectedCategory} = useTypedSelector(state => state.categories);

  useEffect(() => {
    dispatch(getNewArrivalProducts({limit: 8, sort: 'asc'}));
    dispatch(getBestSellerProducts({limit: 8, sort: 'asc'}));
    dispatch(getProducts({limit: 8, sort: 'asc', category: selectedCategory}));
    dispatch(getCategories());
    dispatch(getCarts({userId: '2'}));
  }, []);
  useEffect(() => {
    dispatch(getProducts({limit: 8, sort: 'desc', category: selectedCategory}));
  }, [selectedCategory]);

  const widgetItems: any = ({item}) => {
    switch (item?.component) {
      case 'categories':
        return <Categories item={item} />;
      case 'introduction':
        return <Introduction item={item} />;
      case 'specialForYou':
        return <SpecialForYou item={item} />;
      case 'newArrival':
        return <NewArrival item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;

      default:
        <Text>There is no data!!</Text>;
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={widgets} renderItem={widgetItems} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
