import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import TrendyolGo from '../screens/trendyolGo';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import {
  CART,
  FAVORITES,
  HOMESCREEN,
  PROFILE,
  TRENDYOLGO,
} from '../utils/routes';
import TabIcon from '../components/router/tabIcon';
import COLORS from '../theme/colors';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  const quantity = useSelector(state => state?.cart?.cart)?.length;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
          />
        ),

        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY,
      })}>
      <Tab.Screen name={HOMESCREEN} component={Home} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen
        options={{
          tabBarBadge: quantity,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.WHITE,
          },
        }}
        name={CART}
        component={Cart}
      />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
