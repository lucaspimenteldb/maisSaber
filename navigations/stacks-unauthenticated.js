import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login/LoginScreen.js'
import OnboardingScreen from '../screens/onboarding/OnboardingScreen.js'

const Stack = createNativeStackNavigator();

export default UnauthenticatedNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        options={{
          headerShown: false
        }}
        component={OnboardingScreen}        
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false
        }}
        component={LoginScreen}        
      />
    </Stack.Navigator>
  )
}