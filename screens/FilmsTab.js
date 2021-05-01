import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Films from './Films'
import FilmsWatched from './FilmsWatched'

const FilmsTab = () => {
    return(
        <Tab.Navigator
        initialRouteName="Films"
        tabBarOptions={{
          activeTintColor: 'white',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: '#6200EE' },
        }}
      >
        <Tab.Screen
          name="Films"
          component={Films}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="FilmsWatched"
          component={FilmsWatched}
          options={{ tabBarLabel: 'Updates' }}
        />
      </Tab.Navigator>
    )
}

export default FilmsTab;