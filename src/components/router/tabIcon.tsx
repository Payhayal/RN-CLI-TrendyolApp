import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6Pro';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import {
  CART,
  FAVORITES,
  HOMESCREEN,
  PROFILE,
  TRENDYOLGO,
} from '../../utils/routes';
import {TabIconProps} from '../../models/router';

const TabIcon: React.FC<TabIconProps> = ({focused, color, size, name}) => {
  if (name == HOMESCREEN)
    return <Ionicons size={size} color={color} name="home" />;
  else if (name == TRENDYOLGO)
    return <FontAwesome6Brands size={size} color={color} name="golang" />;
  else if (name == FAVORITES)
    return <Foundation size={size} color={color} name="heart" />;
  else if (name == CART)
    return <MaterialIcons size={size} color={color} name="shopping-cart" />;
  else name == PROFILE;
  return <FontAwesome size={size} color={color} name="user" />;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default TabIcon;
