import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableHighlight, Animated } from 'react-native'

import FecharIcon from '../../../assets/icons/FecharIcon.js'
import EstrelaDoudaraIcon from '../../../assets/icons/EstrelaDouradaIcon.js'
import EstrelaBrancaIcon from '../../../assets/icons/EstrelaBrancaIcon.js'


import { useDispatch } from 'react-redux'
import { setShowFeedbackModal } from '../../../redux/actions.js'

import styles from './styles.js'

const Modal = (props) => {
  const [stars, setStars] = useState([
    { note: 1, selected: true },
    { note: 2, selected: false },
    { note: 3, selected: false },
    { note: 4, selected: false },
    { note: 5, selected: false },
  ])
  const giveFeedback = (note) => {
    stars.map(
      (star, currentIndex) => {
        if (star.note <= note) {
          setStars(stars => {
            const newStars = [...stars]
            newStars[currentIndex].selected = true
            return newStars
          })
        } else {
          setStars(stars => {
            const newStars = [...stars]
            newStars[currentIndex].selected = false
            return newStars
          })
        }
      }
    )
  }
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
    setTimeout(() => dispatch(setShowFeedbackModal(false)), 350)
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
            <Text style={styles.modalTitle}>Avalie o vídeo</Text>
            <TouchableHighlight
              onPress={closeFeedbackModal}
              underlayColor="#f00"
              style={styles.closeButton}
            >
              <FecharIcon />
            </TouchableHighlight>
          </View>

          <View style={styles.modalContent}>
            {
              stars.map(star => (
                <TouchableHighlight 
                  key={'star-'+star.note}
                  onPress={() => giveFeedback(star.note)}
                  underlayColor='#fff'
                  style={styles.starsButton}
                >
                  {star.selected ? <EstrelaDoudaraIcon /> : <EstrelaBrancaIcon />}
                </TouchableHighlight>
              ))
            }
          </View>
          <View style={styles.modalActions}>
            <TouchableHighlight
              underlayColor="#fff"
              onPress={closeFeedbackModal}
            >
              <View style={styles.modalActionButton}>
                <Text style={styles.modalActionButtonText}>
                  Avaliar
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