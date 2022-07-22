import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screens/home/HomeScreen.js'
import NotificacoesTela from '../screens/notificacoes/NotificacoesTela.js'
import LivrosDigitais from '../screens/LivrosDigitais/LivrosDigitais'
import HomeHeader from '../components/header/home/HomeHeader.js';
import { AgendaNavigator, HelpNavigator, LevelNavigator, MensagensNavigator, MomentosNavigator, MuralNavigator, ProfileNavigator, TrailsNavigator, VideosNavigator, SelecionarDisciplinaNavigator } from './stacks.js'
import TrailsHeader from '../components/header/trails/TrailsHeader.js';

import { useNavigation } from '@react-navigation/native';
import MensagensTela from '../screens/mensagens/MensagensTela.js';

import HomeTabIcon from '../assets/icons/HomeTabIcon'
import VideoTabIcon from '../assets/icons/VideoTabIcon.js'
import MensagensTabIcon from '../assets/icons/MensagensTabIcon'
import AgendaTabIcon from '../assets/icons/AgendaTabIcon'

const Tab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()} />
          ),
          headerStyle: { backgroundColor: '#fff' },
          tabBarLabelStyle: {
            fontFamily: 'Nunito-Bold'
          },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarIcon: (tabInfo) => {
            return <HomeTabIcon color={tabInfo.focused ? '#EA414F' : '#6B6B6B'} />
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={HomeScreen}
      />
    <Tab.Screen  name="LivrosDigitais"
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
                   borderTopRightRadius: 20,
                 },
                 tabBarActiveTintColor: '#fff',
        }}
               component={LivrosDigitais}
               />

  <Tab.Screen
        name="Momentos"
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <TrailsHeader navigation={useNavigation()} />
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={MomentosNavigator}
      />

      <Tab.Screen
        name="SelecionarDisciplina"
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()} />
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={SelecionarDisciplinaNavigator}
      />

      <Tab.Screen
        name="Mural"
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()} />
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={MuralNavigator}
      />

      <Tab.Screen
        name="Notificacoes"
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()} />
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={NotificacoesTela}
      />

      <Tab.Screen
        name="Ajuda"
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()} />
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={HelpNavigator}
      />

      <Tab.Screen
        name="Videos"
        options={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarLabelStyle: {
            fontFamily: 'Nunito-Bold'
          },
          tabBarIcon: (tabInfo) => {
            return <VideoTabIcon color={tabInfo.focused ? '#EA414F' : '#6B6B6B'} />
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={VideosNavigator}
      />

      <Tab.Screen
        name="Mensagens"
        options={{
          headerTitle: () => (
            <HomeHeader navigation={useNavigation()} />
          ),
          headerStyle: { backgroundColor: '#fff' },
          tabBarLabelStyle: {
            fontFamily: 'Nunito-Bold'
          },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarIcon: (tabInfo) => {
            return <MensagensTabIcon color={tabInfo.focused ? '#EA414F' : '#6B6B6B'} />
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={MensagensNavigator}
      />

      <Tab.Screen
        name="Trilhas"
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={TrailsNavigator}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <TrailsHeader navigation={useNavigation()} />
          ),
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#ED484B',
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
            backgroundColor: '#fff',
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={LevelNavigator}
      />
      <Tab.Screen
        name="Agenda"
        options={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
          },
          tabBarLabelStyle: {
            fontFamily: 'Nunito-Bold'
          },
          tabBarIcon: (tabInfo) => {
            return <AgendaTabIcon color={tabInfo.focused ? '#EA414F' : '#6B6B6B'} />
          },
          tabBarActiveTintColor: '#ED484B',
        }}
        component={AgendaNavigator}
      />
    </Tab.Navigator>
  );
};