import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableHighlight, Animated } from 'react-native'

import AlunoTristeIcon from '../../../assets/icons/AlunoTristeIcon.js'
import CoroaIcon from '../../../assets/icons/CoroaIcon.js'
import FecharIcon from '../../../assets/icons/FecharIcon.js'

import styles from './styles.js'

const Modal = (props) => {
  const fadeOverlay = useRef(new Animated.Value(0)).current;
  const translateModal = useRef(new Animated.Value(350)).current;
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
  const closeWelcomeModal = () => {
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
    setTimeout(() => props.close(), 350)
  }

  return (
    <>
      <Animated.View style={[styles.overlay, { opacity: fadeOverlay }]}>
        <Animated.View style={[
          styles.modalWrapper,
          props.bottom ? styles.modalWrapperBottom : styles.modalWrapperTop,
          { transform: [{ translateY: translateModal }] }
        ]}
        >
          <View style={styles.modalHeader}>
            <TouchableHighlight
              onPress={closeWelcomeModal}
              underlayColor="#f00"
              style={styles.closeButton}
            >
              <FecharIcon />
            </TouchableHighlight>
          </View>

          <View style={styles.modalContent}>
            <Text style={styles.modalContentTitle}>
              Recompensas
            </Text>
            <View style={styles.rewardWrapper}>
              <View style={styles.rewardIcon}>
                <CoroaIcon/>
              </View>
              <View>
                <Text style={styles.rewardTitle}>
                  20 coroas
                </Text>
                <Text style={styles.rewardText}>
                  Assista a aula completa
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </>
  )
}

export default Modal