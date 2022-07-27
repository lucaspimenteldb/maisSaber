import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import MensagensIcon from '../../assets/icons/MensagensIcon.js'
import HatEducationMiniIcon from '../../assets/icons/HatEducationMiniIcon.js'
import CalendarMiniIcon from '../../assets/icons/CalendarMiniIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'

const MensagensTela = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  return (
    <>
      <LinearGradient 
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#3C368C', '#D02F60']}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <MensagensIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Mensagens</Text>
              <Text style={styles.headerText}>Todas as publicações dos seus professores</Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.notificationHub, { paddingBottom: tabBarHeight, }]}>
            {/* main hub */}
            <View style={styles.notificationHubContainer}>
              <TouchableHighlight
                onPress={() => navigation.navigate('MensagensAbertas')}
                underlayColor='#fff'
                style={styles.notificationTouchable}
              >
                <View style={styles.notificationButton}>
                  <Image
                    source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
                    style={styles.notificationAvatar}
                  />
                  <View style={styles.notificationBody}>
                    <View style={styles.notificationTexts}>
                      <Text style={styles.notificationOwner}>
                        Prof. Kassandra
                      </Text>
                      <Text style={styles.notificationDescription}>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Exercitation.
                      </Text>
                    </View>
                    <View style={styles.notificationInfos}>
                      <Text style={styles.notificationTime}>
                        Agora
                      </Text>
                      <MuralPublicationArrowIcon />
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>

        {missionsModal}
      </LinearGradient>
    </>
  )
}

export default MensagensTela