import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableHighlight, Animated } from 'react-native'

import BauIcon from '../../../assets/BauIcon.js'
import FecharIcon from '../../../assets/FecharIcon.js'
import GainPointsModal from '../gain-points-modal/Modal.js'

import { useDispatch, useSelector } from 'react-redux'
import { setShowMissionsModal, setShowGainPointsModal } from '../../../redux/actions.js'

import styles from './styles.js'

const Modal = (props) => {
  const dispatch = useDispatch();
  const {showGainPointsModal} = useSelector(state => state.showGainPointsModalReducer)

  const fadeOverlay = useRef(new Animated.Value(0)).current;
  const translateModal = useRef(new Animated.Value(-350)).current;
  useEffect(() => {
    Animated.timing(
      fadeOverlay, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      },
    ).start();
    Animated.timing(
      translateModal, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true
      },
    ).start();
  }, [fadeOverlay, translateModal])
  const closeMissionsModal = () => {
    Animated.timing(
      fadeOverlay, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      },
    ).start();
    Animated.timing(
      translateModal, {
        toValue: -350,
        duration: 350,
        useNativeDriver: true
      },
    ).start();
    setTimeout(() => dispatch(setShowMissionsModal(false)), 350)
  }

  const missions = [
    {
      title: 'Meta diária',
      text: 'Assista 2 videoaulas hoje',
      canReceiveReward: false,
    },
    {
      title: 'Desafio',
      text: 'Compartilhe o app com um amigo',
      canReceiveReward: true,
    },
  ]
  return (
    <>
      <Animated.View style={[styles.overlay, {opacity: fadeOverlay}]}>
        <Animated.View style={[
            styles.modalWrapper,
            props.bottom ? styles.modalWrapperBottom : styles.modalWrapperTop,
            {transform: [{translateY: translateModal}]}
          ]}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Missões Diárias</Text>
            <TouchableHighlight
              onPress={closeMissionsModal}
              underlayColor="#f00" 
              style={styles.closeButton}
            >
              <FecharIcon/>
            </TouchableHighlight>
          </View>

          {
            missions.map((mission, currentIndex) => (
              <View 
                key={mission.title + currentIndex} 
                style={[
                  styles.modalMissions,
                  currentIndex < missions.length - 1 ? styles.modalMissionsBorder : null
                ]}
              >
                <View style={styles.flex}>
                  <BauIcon />
                  <Text style={styles.modalMissionsTitle}>
                    {mission.title}
                  </Text>
                  <Text style={styles.modalMissionsText}>{mission.text}</Text>
                </View>

                <View style={styles.modalMissionsActions}>
                  <TouchableHighlight
                    underlayColor='#fff'
                    onPress={() => dispatch(setShowGainPointsModal(true))}
                    disabled={!mission.canReceiveReward}
                  >
                    <View 
                      style={[
                        styles.modalMissionsButton,
                        mission.canReceiveReward ? '' : {opacity: 0.7}
                      ]}
                    >
                      <Text style={styles.modalMissionsButtonText}>
                        Receber recompensa
                      </Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            ))
          }
        </Animated.View>
      </Animated.View>
      { showGainPointsModal ? <GainPointsModal points={6}/> : null }
    </>
  )
}

export default Modal