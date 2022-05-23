import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './bottom-tabs.js'

import LoginScreen from '../screens/LoginScreen.js'
import SubjectsScreen from '../screens/subjects/SubjectsScreen.js'
import WatchVideos from '../screens/watch-videos/WatchVideos.js'
import VideosScreen from '../screens/videos/VideosScreen.js'
import VideosHeader from '../components/header/videos/VideosHeader.js'

const Stack = createNativeStackNavigator();

export const VideosNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VideosStack"
        options={{
          headerTitle: () => (
            <VideosHeader stacks title={'Videos'}/>
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
      <Stack.Screen
        name="Subjects"
        options={{
          headerTitle: () => (
            <VideosHeader stacks title={'Assuntos'}/>
          ),
          headerStyle: {backgroundColor: '#fff'},
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20},
          tabBarActiveTintColor: '#fff',
        }}
        component={SubjectsScreen}
      />
      <Stack.Screen
        name="WatchVideos"
        options={{
          headerTitle: () => (
            <VideosHeader stacks title={'Ver vídeo'}/>
          ),
          headerStyle: {backgroundColor: '#fff'},
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20},
          tabBarActiveTintColor: '#fff',
        }}
        component={WatchVideos}
      />
    </Stack.Navigator>
  )
}