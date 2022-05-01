import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaIcon from '../Components/MaIcon';

import HomeScreen from '../Screens/Product/HomeScreen';
import CartScreen from '../Screens/Cart/CartScreen';
import ProductScreen from '../Screens/Product/ProductScreen';
import SearchScreen from '../Screens/Product/SearchScreen';
import ProfileScreen from '../Screens/Product/ProfileScreen';
import Colors from '../Constants/Colors';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const Productnavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Product Screen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Bottom.Navigator tabBarOptions={{ showLabel: false }}>
        <Bottom.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: 30,
                  width: 30,
                }}>
                <MaIcon
                  iconName="home"
                  size={focused ? 30 : 25}
                  color={focused ? Colors.primary : 'lightgray'}
                />
              </View>
            ),
          }}
          name="homeScreen"
          component={HomeScreen}
        />
        <Bottom.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: 30,
                  width: 30,
                }}>
                <MaIcon
                  iconName="view-list"
                  size={focused ? 30 : 25}
                  color={focused ? Colors.primary : 'lightgray'}
                />
              </View>
            ),
          }}
          name="productScreen"
          component={Productnavigator}
        />
        <Bottom.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: 30,
                  width: 30,
                }}>
                <MaIcon
                  iconName="file-search"
                  size={focused ? 30 : 25}
                  color={focused ? Colors.primary : 'lightgray'}
                />
              </View>
            ),
          }}
          name="SearchScreen"
          component={SearchScreen}
        />
        <Bottom.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: 30,
                  width: 30,
                }}>
                <MaIcon
                  iconName="cart"
                  size={focused ? 30 : 25}
                  color={focused ? Colors.primary : 'lightgray'}
                />
              </View>
            ),
          }}
          name="cartScreen"
          component={CartScreen}
        />
        <Bottom.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: 30,
                  width: 30,
                }}>
                <MaIcon
                  iconName="bag-personal"
                  size={focused ? 30 : 25}
                  color={focused ? Colors.primary : 'lightgray'}
                />
              </View>
            ),
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
