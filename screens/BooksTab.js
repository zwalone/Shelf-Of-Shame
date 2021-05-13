import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Books from './Books'
import BooksWatched from './BooksWatched'

const Tab = createMaterialTopTabNavigator();

const BooksTab = () => {
    return(
        <Tab.Navigator
        initialRouteName="Books"
        tabBarOptions={{
          activeTintColor: 'white',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: '#6200EE' },
        }}
      >
        <Tab.Screen
          name="Books"
          component={Books}
          options={{ tabBarLabel: 'Seen' }}
        />
        <Tab.Screen
          name="BooksWatched"
          component={BooksWatched}
          options={{ tabBarLabel: 'Unseen' }}
        />
      </Tab.Navigator>
    )
}

export default BooksTab;