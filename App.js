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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from './screens/home/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import HomeHeader from './components/header/Home.js';

import { Provider } from 'react-redux'
import { Store } from './redux/store.js'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Vídeos" component={HomeScreen} />
      <Tab.Screen name="Trilhas" component={HomeScreen} />
      <Tab.Screen name="Agenda" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <BottomTabNavigator />
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
    </Provider>
  )
}

export default App;
