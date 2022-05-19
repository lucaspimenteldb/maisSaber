import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import BauIcon from '../../assets/BauIcon.js'
import CoroaIcon from '../../assets/CoroaIcon.js'
import UsuarioIcon from '../../assets/UsuarioIcon.js'

import { useDispatch } from 'react-redux'
import { setShowMissionsModal } from '../../redux/actions.js'

const HomeHeader = ({ navigation }) => {
  const dispatch = useDispatch();
  
  return (
    <>
        <View style={styles.header}>
          <Image source={require('../../assets/logo.png')} style={{width: 61, height: 26}}></Image>

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

            <TouchableOpacity style={styles.buttonProfile} onPress={() => 'seeProfile'}>
              <UsuarioIcon></UsuarioIcon>
            </TouchableOpacity>
          </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuItems: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#630FCC'
  },
  buttonProfile: {
    marginRight: 16,
  },
  crowns: {
    marginLeft: 36,
    marginRight: 36,
    flexDirection: 'row',
    alignItems: 'center'
  },
  crownsText: {
    fontFamily: 'Nunito-ExtraBold',
    color: '#F6970D',
    fontSize: 16,
  },
})

export default HomeHeader