import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetHeader from '../components/ui/widgetHeader';
import {widgetsStyles} from '../styles/widgets/widgetStyles';
import {WidgetProps} from '../models/widgets/widgetProps';
import {useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';

const SpecialForYou: React.FC<WidgetProps> = ({item}) => {
  const {products} = useSelector(state => state.products);
  const {selectedCategory} = useSelector(state => state.categories);
  return (
    <View style={widgetsStyles.container}>
      <WidgetHeader
        widgetTitle={item?.title}
        seeAll
        category={selectedCategory}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <ProductItem
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            item={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default SpecialForYou;
