import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './bottom-tabs.js'

import LoginScreen from '../screens/LoginScreen.js'

const Stack = createNativeStackNavigator();

export default StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen 
        name="HomeOne" 
        options={{headerShown: false}}
        component={BottomTabNavigator}
      />
    </Stack.Navigator> 
  )
}