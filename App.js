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
import TrailsScreen from './screens/trails/TrailsScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import HomeHeader from './components/header/Home.js';
import InicioIcon from './assets/InicioIcon.js';

import { Provider } from 'react-redux'
import { Store } from './redux/store.js'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <HomeHeader></HomeHeader>
          ),
          headerStyle: {backgroundColor: '#fff'},
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20},
          tabBarActiveTintColor: '#fff',
        }}
        component={HomeScreen}        
      />
      <Tab.Screen
        name="Trilhas"
        options={{headerShown: false}}
        component={TrailsScreen}        
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen 
        name="HomeOne" 
        options={{headerShown: false}}
        component={BottomTabNavigator}
      />
    </Stack.Navigator> 
  )
}

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
