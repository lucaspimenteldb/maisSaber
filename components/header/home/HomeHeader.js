import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, Image } from 'react-native'

import UsuarioIcon from '../../../assets/icons/UsuarioIcon.js'
import ChevronIcon from '../../../assets/icons/ChevronIcon.js'

import LinearGradient from 'react-native-linear-gradient'

import styles from './styles.js'

const HomeHeader = ({ stacks, navigation }) => {
  
  return (
    <>
        <View style={[styles.header, stacks ? {marginLeft: 8, marginRight: 24} : '']}>
          <LinearGradient 
            style={[styles.backButton, { borderColor: '#480898', backgroundColor: '#480898' }]}
            colors={['#3C368C', '#D02F60']}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          >
            <TouchableHighlight
              underlayColor='transparent'
              onPress={() => navigation.goBack(null)}
              style={styles.backButtonWrapper}
            >
              <View style={styles.backButton}>
                <ChevronIcon />
              </View>
            </TouchableHighlight>
          </LinearGradient>

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