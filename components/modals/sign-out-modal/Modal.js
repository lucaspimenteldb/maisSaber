import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableHighlight, Animated, Image } from 'react-native'

import AlunoTristeIcon from '../../../assets/icons/AlunoTristeIcon.js'
import FecharIcon from '../../../assets/icons/FecharIcon.js'
import SairAplicativo from '../../../assets/sair-aplicativo.png'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles.js'
import Button from '../../button/Button'

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
            <Image source={SairAplicativo} />

            <Text style={styles.modalContentText}>
              Deseja realmente sair ?
            </Text>
          </View>
          <View style={styles.modalActions}>
            <TouchableHighlight
              onPress={props.signOut}
              underlayColor="transparent"
            >
              <LinearGradient
                colors={['#3C368C', '#D02F60']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={styles.buttonSignUp}
              >
                  <Text style={styles.buttonTextSignUp}>Sim</Text>
              </LinearGradient>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={closeWelcomeModal}
              underlayColor="transparent"
            >
              <LinearGradient
                colors={['#3C368C', '#D02F60']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={styles.buttonSignUp}
              >
                  <Text style={styles.buttonTextSignUp}>Não</Text>
              </LinearGradient>
            </TouchableHighlight>

          </View>
        </Animated.View>
      </Animated.View>
    </>
  )
}

export default Modal