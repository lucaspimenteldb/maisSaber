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
            <HomeHeader navigation={useNavigation()} />
          ),
          headerStyle: { backgroundColor: '#fff' },
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
            backgroundColor: '#630FCC',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={SelecionarDisciplinaNavigator}
      />

      <Tab.Screen
        name="Mensagens"
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
            backgroundColor: '#630FCC',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarActiveTintColor: '#fff',
        }}
        component={MensagensNavigator}
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
            backgroundColor: '#630FCC',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarActiveTintColor: '#fff',
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
            backgroundColor: '#630FCC',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          tabBarActiveTintColor: '#fff',
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
            <TrailsHeader navigation={useNavigation()} />
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