import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Games from './Games'
import GamesWatched from './GamesWatched'

const Tab = createMaterialTopTabNavigator();

const GamesTab = () => {
    return(
        <Tab.Navigator
        initialRouteName="Games"
        tabBarOptions={{
          activeTintColor: 'white',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: '#6200EE' },
        }}
      >
        <Tab.Screen
          name="Games"
          component={Games}
          options={{ tabBarLabel: 'Seen' }}
        />
        <Tab.Screen
          name="GamesWatched"
          component={GamesWatched}
          options={{ tabBarLabel: 'Unseen' }}
        />
      </Tab.Navigator>
    )
}

export default GamesTab;