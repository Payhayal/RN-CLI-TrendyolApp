import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {widgetsStyles} from '../styles/widgets/widgetStyles';
import WidgetHeader from '../components/ui/widgetHeader';
import {WidgetProps} from '../models/widgets/widgetProps';
import {useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';

const BestSeller: React.FC<WidgetProps> = ({item}) => {
  const {bestSeller} = useSelector(state => state.products);
  return (
    <View style={widgetsStyles.container}>
      <WidgetHeader
        widgetTitle={item?.title}
        seeAll
        category={"men's clothing"}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bestSeller}
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
  text: {
    fontSize: 10,
  },
});

export default BestSeller;
