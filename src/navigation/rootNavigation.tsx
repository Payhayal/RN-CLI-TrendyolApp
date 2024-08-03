import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import Header from '../components/router/header';
import {PRODUCTDETAIL, PRODUCTLIST, TABMENU} from '../utils/routes';
import ProductDetail from '../screens/products/productDetail';
import ProductList from '../screens/products/productList';

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}>
      <Stack.Screen name={TABMENU} component={TabNavigation} />
      <Stack.Screen name={PRODUCTDETAIL} component={ProductDetail} />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
