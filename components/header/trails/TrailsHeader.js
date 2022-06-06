import React from 'react'
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native'

import BauIcon from '../../../assets/icons/BauIcon.js'
import CoroaIcon from '../../../assets/icons/CoroaIcon.js'
import UsuarioIcon from '../../../assets/icons/UsuarioIcon.js'
import ChevronIcon from '../../../assets/icons/ChevronIcon.js'

import styles from './styles.js'

import { useDispatch } from 'react-redux'
import { setShowMissionsModal } from '../../../redux/actions.js'

const TrailsHeader = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.header}>
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
            onPress={() => dispatch(setShowMissionsModal(true))}
            style={styles.buttonBau}
          >
            <View>
              <BauIcon></BauIcon>
            </View>
          </TouchableOpacity>

          <View style={styles.crowns}>
            <Text style={styles.crownsText}>6</Text>
            <CoroaIcon></CoroaIcon>
          </View>

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


export default TrailsHeader