import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/home/HomeScreen.js'

import HomeHeader from '../components/header/home/HomeHeader.js';
import {VideosNavigator} from './stacks.js'

const Tab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <HomeHeader />
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
        name="Videos"
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20},
          tabBarActiveTintColor: '#fff',
        }}
        component={VideosNavigator}        
      />
    </Tab.Navigator>
  );
};