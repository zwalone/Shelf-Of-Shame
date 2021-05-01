import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from './Api';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainTabScreen from './screens/MainTab';

import Login from './screens/Login';
import Singup from './screens/Singup';
import Games from './screens/Games';
import Films from './screens/Films';
import Books from './screens/Books';

//init firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


//create nav stack
const Stack = createStackNavigator();


export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: '#6200EE' },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Singup" component={Singup} />
          <Stack.Screen name="MainTabs" component={MainTabScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
