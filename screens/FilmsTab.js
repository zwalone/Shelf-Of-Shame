import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Films from './Films'
import FilmsWatched from './FilmsWatched'

const Tab = createMaterialTopTabNavigator();

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
          options={{ tabBarLabel: 'Seen' }}
        />
        <Tab.Screen
          name="FilmsWatched"
          component={FilmsWatched}
          options={{ tabBarLabel: 'Unseen' }}
        />
      </Tab.Navigator>
    )
}

export default FilmsTab;