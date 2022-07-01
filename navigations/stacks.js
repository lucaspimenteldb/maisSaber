import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SubjectsScreen from '../screens/subjects/SubjectsScreen.js'
import WatchVideosScreen from '../screens/watch-videos/WatchVideos.js'
import VideosScreen from '../screens/videos/VideosScreen.js'
import ProfileScreen from '../screens/profile/ProfileScreen.js'
import ChangePasswordScreen from '../screens/profile-password/ChangePasswordScreen.js'
import PersonalDataScreen from '../screens/profile-personal-data/PersonalDataScreen.js'
import SchoolDataScreen from '../screens/profile-school-data/SchoolDataScreen.js'
import AgendaScreen from '../screens/agenda/AgendaScreen.js';
import AgendaNotificationScreen from '../screens/agenda-notification/AgendaNotificationScreen.js';
import TrailsScreen from '../screens/trails/TrailsScreen.js';
import TrailsHeader from '../components/header/trails/TrailsHeader.js';
import TrailLevelsScreen from '../screens/trail-levels/TrailLevels.js';
import UserLevelScreen from '../screens/user-level/UserLevelScreen.js';
import UserRewardsScreen from '../screens/user-rewards/UserRewardsScreen.js';

import { useNavigation } from '@react-navigation/core';
import TrailQuestionsScreen from '../screens/trail-questions/TrailQuestionsScreen.js';
import HelpScreen from '../screens/help/HelpScreen.js';
import HelpCategoryScreen from '../screens/help-category/HelpCategoryScreen.js';
import HelpTextScreen from '../screens/help-text/HelpTextScreen.js';
import MuralScreen from '../screens/mural/MuralScreen.js'
import MuralPublicationScreen from '../screens/mural-publication/MuralPublicationScreen.js'
import MomentosTela from '../screens/momentos/MomentosTela.js'
import MomentosPublicacaoTela from '../screens/momentos-publicacao/MomentosPublicacaoTela.js';
import MensagensTela from '../screens/mensagens/MensagensTela.js';
import MensagensAbertasTela from '../screens/mensagens-abertas/MensagensAbertasTela.js';

const Stack = createNativeStackNavigator();

export const VideosNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VideosStack"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={VideosScreen}
      />
      <Stack.Screen
        name="Subjects"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={SubjectsScreen}
      />
      <Stack.Screen
        name="WatchVideos"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={WatchVideosScreen}
      />
    </Stack.Navigator>
  )
}

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileStack"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="PersonalData"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={PersonalDataScreen}
      />
      <Stack.Screen
        name="SchoolData"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={SchoolDataScreen}
      />
      <Stack.Screen
        name="ChangePassword"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  )
}

export const TrailsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrailsStack"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={TrailsScreen}
      />
      <Stack.Screen
        name="TrailLevels"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={TrailLevelsScreen}
      />
      <Stack.Screen
        name="TrailQuestions"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={TrailQuestionsScreen}
      />
    </Stack.Navigator>
  )
}

export const AgendaNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AgendaStacks"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={AgendaScreen}
      />
      <Stack.Screen
        name="AgendaNotification"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={AgendaNotificationScreen}
      />
    </Stack.Navigator>
  )
}

export const LevelNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserLevelScreen"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={UserLevelScreen}
      />
      <Stack.Screen
        name="UserRewards"
        options={{
          headerTitle: () => (
            <TrailsHeader stacks navigation={useNavigation()}/>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerBackTitle: '',
          headerBackVisible: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={UserRewardsScreen}
      />
    </Stack.Navigator>
  )
}

export const HelpNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Help"
        options={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={HelpScreen}
      />
      <Stack.Screen
        name="HelpCategory"
        options={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={HelpCategoryScreen}
      />
      <Stack.Screen
        name="HelpText"
        options={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#630FCC', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
          tabBarActiveTintColor: '#fff',
        }}
        component={HelpTextScreen}
      />
    </Stack.Navigator>
  )
}

export const MuralNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Murals"
        options={{
          headerShown: false,
        }}
        component={MuralScreen}        
      />
      <Stack.Screen
        name="MuralPublication"
        options={{
          headerShown: false,
        }}
        component={MuralPublicationScreen}
      />
    </Stack.Navigator>
  )
}

export const MomentosNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Moments"
        options={{
          headerShown: false,
        }}
        component={MomentosTela}        
      />
      <Stack.Screen
        name="MomentosPublicacao"
        options={{
          headerShown: false,
        }}
        component={MomentosPublicacaoTela}        
      />
      
    </Stack.Navigator>
  )
}

export const MensagensNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mensagens1"
        options={{
          headerShown: false,
        }}
        component={MensagensTela}        
      />
      <Stack.Screen
        name="MensagensAbertas"
        options={{
          headerShown: false,
        }}
        component={MensagensAbertasTela}        
      />
      
    </Stack.Navigator>
  )
}

export const LivrosDigitais = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LivrosDigitais"
        options={{
          headerShown: false,
        }}
        component={LivrosDigitais}        
      />      
    </Stack.Navigator>
  )
}