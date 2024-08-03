import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import COLORS from '../theme/colors';
import {categories} from '../utils/constants';
import CategoryItem from '../components/home/categoryItem';
import {widgetsStyles} from '../styles/widgets/widgetStyles';
import {useSelector} from 'react-redux';

const Categories: React.FC = () => {
  const {categories} = useSelector(state => state.categories);

  return (
    <View style={widgetsStyles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => <CategoryItem title={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 10,
  },
});

export default Categories;
