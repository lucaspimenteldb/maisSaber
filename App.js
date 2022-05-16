/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import HomeHeader from './components/header/Home.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen
          name="Home" 
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <HomeHeader></HomeHeader>
            ),
            headerStyle: {backgroundColor: '#fff'},
            headerShadowVisible: false,
            headerBackTitle: '',
            headerBackVisible: false
          }}
        >
          
        </Stack.Screen>  
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default App;
