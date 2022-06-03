import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/home/HomeScreen.js'
import HomeHeader from '../components/header/home/HomeHeader.js';
import {AgendaNavigator, ProfileNavigator, VideosNavigator} from './stacks.js'

import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()}/>
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
      <Tab.Screen
        name="Profile"
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()}/>
          ),
          tabBarStyle: {backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20},
          tabBarActiveTintColor: '#fff',
        }}
        component={ProfileNavigator}        
      />
      <Tab.Screen
        name="Agenda"
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20},
          tabBarActiveTintColor: '#fff',
        }}
        component={AgendaNavigator}
      />
    </Tab.Navigator>
  );
};