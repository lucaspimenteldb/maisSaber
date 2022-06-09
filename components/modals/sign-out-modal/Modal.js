import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableHighlight, Animated } from 'react-native'

import AlunoTristeIcon from '../../../assets/icons/AlunoTristeIcon.js'
import FecharIcon from '../../../assets/icons/FecharIcon.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import styles from './styles.js'

const Modal = (props) => {
  const tabBarHeight = useBottomTabBarHeight();
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
          props.bottom ? [{paddingBottom: tabBarHeight}, styles.modalWrapperBottom] : styles.modalWrapperTop,
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
            <AlunoTristeIcon />

            <Text style={styles.modalContentTitle}>
              Sair
            </Text>
            <Text style={styles.modalContentText}>
              Você realmente quer sair do aplicativo?
            </Text>
          </View>
          <View style={styles.modalActions}>
            <TouchableHighlight 
              underlayColor="#fff" 
              onPress={closeWelcomeModal}
              style={styles.buttonWrapper}
            >
              <View style={styles.modalActionButton}>
                <Text style={styles.modalActionButtonText}>
                  Não
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              underlayColor="#fff" 
              onPress={props.signOut}
              style={styles.buttonWrapperSecondary}
            >
              <View style={styles.modalActionButtonSecondary}>
                <Text style={styles.modalActionButtonTextSecondary}>
                  Sim
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