import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableHighlight, Animated, Image } from 'react-native'

import FecharIcon from '../../../assets/icons/FecharIcon.js'

import { useDispatch } from 'react-redux'
import { setShowBookModal } from '../../../redux/actions.js'
import { WebView } from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles.js'
import Button from '../../button/Button.js'

const Modal = ({ title, body, textButton, onPress, titleBody, image }) => {
  const dispatch = useDispatch();

  const fadeOverlay = useRef(new Animated.Value(0)).current;
  const translateModal = useRef(new Animated.Value(350)).current;

  const closeFeedbackModal = () => {
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
    setTimeout(() => onPress(), 350)
  } 

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

  return (
    <>
      <Animated.View style={[styles.overlay, { opacity: fadeOverlay }]}>
        <Animated.View style={[
          styles.modalWrapper,
          { transform: [{ translateY: translateModal }] }
        ]}
        >
            <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{title}</Text>
                <TouchableHighlight
                    onPress={closeFeedbackModal}
                    underlayColor="transparent"
                    style={styles.closeButton}
                >
                    <FecharIcon />
                </TouchableHighlight>
            </View>
            <View style={{ flex: 1, justifyContent: 'space-around', marginBottom: 10 }}>
              <View style={{
                alignSelf: 'center',
                justifyContent: 'center',
                top: -20
              }}>
                {image}
                <Text style={{
                  color: '#000',
                  fontFamily: 'Nunito-Bold',
                  marginTop: 18
                }}>{titleBody}</Text>
              </View>
                <Text style={{
                    textAlign: 'center',
                    color: '#000',
                    opacity: 0.6,
                    fontFamily: 'Nunito-SemiBold'
                }}>{body}</Text>

                <Button
                    width={330}
                    height={50}
                    fontSize={14}
                    borderRadius={10}
                    title={textButton}
                    onPress={closeFeedbackModal}
                />
            </View>
        </Animated.View>
      </Animated.View>
    </>
  )
}

export default Modal