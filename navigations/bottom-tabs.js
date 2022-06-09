import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/home/HomeScreen.js'
import HomeHeader from '../components/header/home/HomeHeader.js';
import {AgendaNavigator, LevelNavigator, ProfileNavigator, TrailsNavigator, VideosNavigator} from './stacks.js'

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
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#630FCC',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={HomeScreen}        
      />
      <Tab.Screen
        name="Videos"
        options={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#630FCC', 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={VideosNavigator}        
      />
      <Tab.Screen
        name="Trilhas"
        options={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#630FCC', 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={TrailsNavigator}        
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()}/>
          ),
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#630FCC', 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={ProfileNavigator}        
      />
      <Tab.Screen
        name="UserLevel"
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#630FCC', 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={LevelNavigator}        
      />
      <Tab.Screen
        name="Agenda"
        options={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#630FCC',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={AgendaNavigator}
      />
    </Tab.Navigator>
  );
};