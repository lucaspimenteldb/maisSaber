import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableHighlight, Animated } from 'react-native'

import CopiarIcon from '../../../assets/icons/CopiarIcon.js'
import FecharIcon from '../../../assets/icons/FecharIcon.js'
import WhatsappIcon from '../../../assets/icons/WhatsappIcon.js'
import FacebookIcon from '../../../assets/icons/FacebookIcon.js'

import { useDispatch } from 'react-redux'
import { setShowShareModal } from '../../../redux/actions.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import styles from './styles.js'

const Modal = (props) => {
  const dispatch = useDispatch();
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
  const closeShareModal = () => {
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
    setTimeout(() => dispatch(setShowShareModal(false)), 350)
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
            <Text style={styles.modalTitle}>Compartilhar com o amigo</Text>
            <TouchableHighlight
              onPress={closeShareModal}
              underlayColor="#f00"
              style={styles.closeButton}
            >
              <FecharIcon />
            </TouchableHighlight>
          </View>

          <View style={styles.modalContent}>
            <Text style={styles.modalContentText}>
              Compartilhe o MaisSaber com os amigos e ganhe coroas
            </Text>

            <View style={styles.shareLink}>
              <Text>www.com.br</Text>
            </View>
          </View>
          <View style={styles.modalActions}>
            <TouchableHighlight
              underlayColor="#fff"
              onPress={() => 'oi'}
            >
              <View style={[styles.modalActionButtonCopy, styles.modalActionButton]}>
                <CopiarIcon style={{marginRight: 6}}/>
                <Text style={styles.modalActionButtonText}>
                  Copiar
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff" onPress={() => 'oi'}>
              <View style={styles.modalActionButtonSecondary}>
                <FacebookIcon />
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff" onPress={() => 'oi'}> 
              <View style={styles.modalActionButtonSecondary}>
                <WhatsappIcon />
              </View>
            </TouchableHighlight>
          </View>
        </Animated.View>
      </Animated.View>
    </>
  )
}

export default Modal