import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import COLORS from '../../theme/colors';
import {CategoriesPropsTypes} from '../../models/home/categories';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {changeCategory} from '../../store/slice/categoriesSlice';

const CategoryItem: React.FC<CategoriesPropsTypes> = ({title}) => {
  const {selectedCategory} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  return (
    <Pressable onPress={() => dispatch(changeCategory(title))}>
      <LinearGradient
        colors={['#f8a902', '#f74c06']}
        style={
          selectedCategory == title ? styles.selectedCategory : styles.container
        }>
        <Text
          style={
            selectedCategory == title ? styles.selectedTitle : styles.title
          }>
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 100,
    margin: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderColor: COLORS.INPUTCOLOR,
  },
  title: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  selectedTitle: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  selectedCategory: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 100,
    margin: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,

    borderWidth: 1.5,
    borderColor: COLORS.INPUTCOLOR,
  },
});

export default CategoryItem;
