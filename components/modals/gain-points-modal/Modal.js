import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableHighlight, Animated } from 'react-native'

import FecharIcon from '../../../assets/FecharIcon.js'
import CoroaJoiasGrandeIcon from '../../../assets/CoroaJoiasGrandeIcon.js'

import { useDispatch } from 'react-redux'
import { setShowGainPointsModal } from '../../../redux/actions.js'

import styles from './styles.js'

const Modal = (props) => {
  const dispatch = useDispatch();

  const fadeOverlay = useRef(new Animated.Value(0)).current;
  const translateModal = useRef(new Animated.Value(350)).current;
  const crownMovement = useRef(new Animated.Value(0)).current
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
    Animated.loop(
      Animated.timing(
        crownMovement, {
        toValue: 2,
        duration: 1500,
        useNativeDriver: true
      },
      )
    ).start()
  }, [fadeOverlay, translateModal, crownMovement])
  const closeGainPointsModal = () => {
    Animated.timing(
      fadeOverlay, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    },
    ).start();
    Animated.timing(
      translateModal, {
      toValue: 350,
      duration: 350,
      useNativeDriver: true
    },
    ).start();
    setTimeout(() => dispatch(setShowGainPointsModal(false)), 350)
  }
  const spin = crownMovement.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['-10deg', '10deg', '-10deg']
  })

  return (
    <>
      <Animated.View style={[styles.overlay, { opacity: fadeOverlay }]}>
        <Animated.View style={[
          styles.modalWrapper,
          { transform: [{ translateY: translateModal }] }
        ]}
        >
          <View style={styles.modalHeader}>
            <TouchableHighlight
              onPress={closeGainPointsModal}
              underlayColor="#f00"
              style={styles.closeButton}
            >
              <FecharIcon />
            </TouchableHighlight>
          </View>

          <View style={styles.modalContent}>
            <Animated.View style={{transform: [{rotateZ: spin}]}}>
              <CoroaJoiasGrandeIcon />
            </Animated.View>

            <Text style={styles.modalTitle}>
              +{props.points} COROAS
            </Text>
            <Text style={styles.modalDescription}>
              Parabéns, você ganhou uma coroa por assistir, continue assistindo para ganhar mais
            </Text>
          </View>
          <View style={styles.modalActions}>
            <TouchableHighlight
              underlayColor="#fff"
              onPress={closeGainPointsModal}
            >
              <View style={styles.modalActionButton}>
                <Text style={styles.modalActionButtonText}>
                  Continuar estudando
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </Animated.View>
      </Animated.View>
    </>
  )
}

export default Modal