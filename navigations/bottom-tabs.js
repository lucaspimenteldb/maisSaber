import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/home/HomeScreen.js'
import MuralScreen from '../screens/mural/MuralScreen.js'
import MuralPublicationScreen from '../screens/mural-publication/MuralPublicationScreen.js'
import HomeHeader from '../components/header/home/HomeHeader.js';
import {AgendaNavigator, HelpNavigator, LevelNavigator, ProfileNavigator, TrailsNavigator, VideosNavigator} from './stacks.js'
import TrailsHeader from '../components/header/trails/TrailsHeader.js';

import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Mural"
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
        component={MuralScreen}        
      />
      <Tab.Screen
        name="MuralPublication"
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
        component={MuralPublicationScreen}        
      />
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
        name="Ajuda"
        options={{
          tabBarButton: () => null,
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
            borderTopRightRadius: 20
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={HelpNavigator}        
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
            <TrailsHeader navigation={useNavigation()}/>
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