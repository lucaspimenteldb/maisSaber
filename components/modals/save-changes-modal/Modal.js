import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableHighlight, Animated, Image } from 'react-native'

import CheckSalvarIcon from '../../../assets/icons/CheckSalvarIcon.js'
import FecharIcon from '../../../assets/icons/FecharIcon.js'
import Button from '../../button/Button.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import DadosAlterados from '../../../assets/dados-alterados.png'

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
          props.bottom ? [{ paddingBottom: tabBarHeight }, styles.modalWrapperBottom] : styles.modalWrapperTop,
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
            <Image source={DadosAlterados} />

            <Text style={{
              color: '#1C1C1C',
              fontFamily: 'Nunito-ExtraBold',
              marginTop: 14
            }}>Sucesso!</Text>

            <Text style={styles.modalContentTitle}>
              {props.title ? props.title : 'Dados alterados com sucesso!'}
            </Text>
          </View>
          <View style={styles.modalActions}>
            <Button
              width={330}
              height={40}
              fontSize={14}
              borderRadius={10}
              title={'OK'}
              onPress={closeWelcomeModal}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </>
  )
}

export default Modal