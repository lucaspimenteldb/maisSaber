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

const MensagensAbertasTela = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  return (
    <>
      <LinearGradient 
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#E53952', '#EE4949', '#E17C1E']}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
              style={styles.notificationAvatar}
            />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Kassandra</Text>
              <Text style={styles.headerText}>Prof. de matemática</Text>
            </View>

            <TouchableHighlight
              style={styles.button}
              onPress={() => 'a'}
              underlayColor='#fff'
            >
              <Text style={styles.buttonText}>Ir para turma</Text>
            </TouchableHighlight>
          </View>

          {/* navigation hub */}
          <View style={[styles.notificationHub, { paddingBottom: tabBarHeight, }]}>
            {/* main hub */}
            <View style={styles.notificationHubContainer}>
              <Text style={styles.title}>
                Chat de mensagens
              </Text>

              <LinearGradient 
                style={styles.message}
                colors={['#E9404F', '#ED5E30' ]}
                start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
              >
                <Text style={styles.messageText}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus qui minus, harum voluptatum perferendis quibusdam?
                </Text>
                <Text style={styles.messageDate}>
                  12/09/2022
                </Text>
              </LinearGradient>
              <LinearGradient 
                style={styles.message}
                colors={['#E9404F', '#ED5E30' ]}
                start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
              >
                <Text style={styles.messageText}>
                  Consectetur unde, non tenetur labore quasi quam doloremque quod amet accusantium ducimus, repudiandae vel?
                </Text>
                <Text style={styles.messageDate}>
                  12/09/2022
                </Text>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>

        {missionsModal}
      </LinearGradient>
    </>
  )
}

export default MensagensAbertasTela