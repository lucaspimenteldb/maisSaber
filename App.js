import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux'
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

  const isAuthenticated = false;

  return (
    <>
      {
        isAuthenticated ? 
          (
            <Provider store={Store}>
              <NavigationContainer>
                <BottomTabNavigator />
              </NavigationContainer>
            </Provider>
          ) :
          (
            <Provider store={Store}>
              <NavigationContainer>
                <UnauthenticatedNavigator />
              </NavigationContainer>
            </Provider>
          )
      }
    </>
  )
}

export default App;
