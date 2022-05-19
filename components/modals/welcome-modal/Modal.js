import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableHighlight, Animated } from 'react-native'

import AlunoIcon from '../../../assets/AlunoIcon.js'
import FecharIcon from '../../../assets/FecharIcon.js'

import { useDispatch } from 'react-redux'
import { setShowWelcomeModal } from '../../../redux/actions.js'

import styles from './styles.js'

const Modal = (props) => {
  const dispatch = useDispatch();

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
    setTimeout(() => dispatch(setShowWelcomeModal(false)), 350)
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
              underlayColor="#fff"
              style={styles.closeButton}
            >
              <FecharIcon />
            </TouchableHighlight>
          </View>

          <View style={styles.modalContent}>
            <AlunoIcon />

            <Text style={styles.modalContentTitle}>
              Olá, Anderson!
            </Text>
            <Text style={styles.modalContentText}>
              Que bom ter você por aqui! Continue suas trilhas para aprender novos conteúdos e ganhar recompensas.
            </Text>
          </View>
          <View style={styles.modalActions}>
            <TouchableHighlight underlayColor="#fff" onPress={() => 'oi'}>
              <View style={styles.modalActionButton}>
                <Text style={styles.modalActionButtonText}>
                  Ir para trilhas
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff" onPress={closeWelcomeModal}>
              <View style={styles.modalActionButtonSecondary}>
                <Text style={styles.modalActionButtonTextSecondary}>
                  Agora não
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