import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import UsuarioIcon from '../../../assets/icons/UsuarioIcon.js'
import LogoPequena from '../../../assets/icons/LogoPequena.js'

import styles from './styles.js'

const HomeHeader = ({ navigation }) => {
  
  return (
    <>
        <View style={styles.header}>
          <LogoPequena />

          {/* menu items */}
          <View style={styles.menuItems}>
            <TouchableOpacity 
              style={styles.buttonProfile} 
              onPress={() => navigation.navigate('Profile')}
            >
              <UsuarioIcon></UsuarioIcon>
            </TouchableOpacity>
          </View>
        </View>
    </>
  )
}


export default HomeHeader