import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider, useSelector, useDispatch } from 'react-redux'
import { Store } from './redux/store.js'
import RNBootSplash from 'react-native-bootsplash'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

import BottomTabNavigator from './navigations/bottom-tabs.js'
import UnauthenticatedNavigator from './navigations/stacks-unauthenticated.js'
import { setIsLoggedIn, setUserReduce } from './redux/actions.js'
import Service from './screens/login/services/service';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide()
    }, 1500)
    SplashScreen.hide()
  }, [])

  useEffect(() => {
    async function begin () {
      const response = await AsyncStorage.getItem('token')
      const matricula = await AsyncStorage.getItem('matricula')
      const senha = await AsyncStorage.getItem('senha')
      await Service.login(matricula, senha).then(response => {
        dispatch(setUserReduce(response))
      })
      if (response !== null) {
        dispatch(setIsLoggedIn(true))
      }
    }

    begin()
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
