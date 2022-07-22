import React from 'react'
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native'

import BauIcon from '../../../assets/icons/BauIcon.js'
import CoroaIcon from '../../../assets/icons/CoroaIcon.js'
import LogoPequena from '../../../assets/icons/LogoPequena.js'
import ChevronIcon from '../../../assets/icons/ChevronIcon.js'

import styles from './styles.js'

import { useDispatch } from 'react-redux'
import { setShowMissionsModal } from '../../../redux/actions.js'

const TrailsHeader = ({stacks, navigation }) => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={[styles.header, stacks ? {marginLeft: 8, marginRight: 24} : '']}>
        <TouchableHighlight
          underlayColor='#fff'
          onPress={() => navigation.goBack()}
          style={styles.backButtonWrapper}
        >
          <View style={styles.backButton}>
            <ChevronIcon />
          </View>
        </TouchableHighlight>
        {/* <Image source={require('../../../assets/logo.png')} style={{ width: 61, height: 26 }}></Image> */}

        {/* menu items */}
        <View style={styles.menuItems}>
          <TouchableOpacity
            style={styles.buttonProfile}
            onPress={() => navigation.navigate('Profile')}
          >
            <LogoPequena></LogoPequena>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}


export default TrailsHeader