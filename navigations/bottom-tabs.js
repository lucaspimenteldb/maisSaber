import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/home/HomeScreen.js'
import VideosScreen from '../screens/videos/VideosScreen.js'
import HomeHeader from '../components/header/home/HomeHeader.js';
import VideosHeader from '../components/header/videos/VideosHeader.js';

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
          headerTitle: () => (
            <VideosHeader />
          ),
          headerStyle: {backgroundColor: '#fff'},
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20},
          tabBarActiveTintColor: '#fff',
        }}
        component={VideosScreen}        
      />
    </Tab.Navigator>
  );
};