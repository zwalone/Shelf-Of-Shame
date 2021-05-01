import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GamesTab from './GamesTab';
import FilmsTab from './FilmsTab';
import BooksTab from './BooksTab';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => { return (
    <Tab.Navigator
      initialRouteName="Books"
      activeColor="white"
      barStyle={{ backgroundColor: "#6200EE" }}
    >
      <Tab.Screen
        name="Books"
        component={BooksTab}
        options={{
          tabBarLabel: 'Books',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Films"
        component={FilmsTab}
        options={{
          tabBarLabel: 'Films',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="filmstrip" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={GamesTab}
        options={{
          tabBarLabel: 'Games',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad-variant" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
)}

export default MainTabScreen;