import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider, useSelector } from 'react-redux'
import { Store } from './redux/store.js'
import RNBootSplash from 'react-native-bootsplash'

import BottomTabNavigator from './navigations/bottom-tabs.js'
import UnauthenticatedNavigator from './navigations/stacks-unauthenticated.js'

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide()
    }, 1500)
  }, [])

  const { isLoggedIn } = useSelector(state => state.setIsLoggedInReducer);

  return (
    <Provider store={Store}>
      {
        isLoggedIn ?
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
      }
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
