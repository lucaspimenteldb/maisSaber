import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider, useSelector } from 'react-redux'
import { Store } from './redux/store.js'
import RNBootSplash from 'react-native-bootsplash'
import SplashScreen from 'react-native-splash-screen'

import BottomTabNavigator from './navigations/bottom-tabs.js'
import UnauthenticatedNavigator from './navigations/stacks-unauthenticated.js'

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide()
    }, 1500)
    SplashScreen.hide()
  }, [])

  const { isLoggedIn } = useSelector(state => state.setIsLoggedInReducer);
  const chooseNavigator = isLoggedIn ?
    (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    ) :
    (
      <NavigationContainer>
        <UnauthenticatedNavigator />
      </NavigationContainer>
    )

  return (
    <Provider store={Store}>
      { chooseNavigator }
    </Provider>
  )
}

const AppWrapper = () => {
  return (
    <Provider store={Store}>
      <App></App>
    </Provider>  
  )
}

export default AppWrapper;
