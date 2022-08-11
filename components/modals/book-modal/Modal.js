import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableHighlight, Animated, Image } from 'react-native'

import FecharIcon from '../../../assets/icons/FecharIcon.js'

import { useDispatch } from 'react-redux'
import { setShowBookModal } from '../../../redux/actions.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { WebView } from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles.js'

const Modal = (props) => {
  const [viewBook, setViewBook] = useState(false)
  const [contentBook, setContentBook] = useState(true)

  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch();

  const fadeOverlay = useRef(new Animated.Value(0)).current;
  const translateModal = useRef(new Animated.Value(350)).current;

  const handleRedirectUrl = () => {
    setViewBook(true)
    setContentBook(false)
  }
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
    setTimeout(() => dispatch(setShowBookModal(false)), 350)
  } 

  const closeModalWebView = () => {
    setViewBook(false)
    setContentBook(true)
  }

  const urlBook = (
    <View style={{
      width: '100%',
      height: '90%',
    }}>
      <TouchableHighlight
        onPress={closeModalWebView}
        underlayColor="transparent"
        style={styles.closeButton}
      >
        <FecharIcon />
      </TouchableHighlight>
      <WebView
        source={{ uri: props.book.url }}
        style={{margin: 10}}
      />
    </View>
  )

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
        {viewBook  ? urlBook : null}
        <Animated.View style={[
          styles.modalWrapper,
          props.bottom ? [{paddingBottom: tabBarHeight}, styles.modalWrapperBottom] : styles.modalWrapperTop,
          { transform: [{ translateY: translateModal }] }
        ]}
        >
          {contentBook &&
            <View style={styles.modalHeader}>
              <Image source={{ uri: `https://admin.plataformaevoluir.com.br/${props.book.imagem}` }} style={styles.modalImageBook} />
              <View style={styles.modalInfoBookArea}>
                <Text style={styles.modalTitleBook}>{props.book.titulo}</Text>
                <Text style={styles.modalSubtitleBook}>Descricao</Text>
                <View style={styles.modalActions}>
                  <TouchableHighlight
                    underlayColor="#fff"
                    onPress={handleRedirectUrl}
                  >
                    <>
                      <View style={styles.modalActionButtonBorderBottom} />
                      <LinearGradient 
                        style={styles.modalActionButton}
                        colors={['#3C368C', '#D02F60']}
                        start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
                      >
                        <Text style={styles.modalActionButtonText}>
                          Visualizar
                        </Text>
                      </LinearGradient>
                    </>
                  </TouchableHighlight>
                </View>
              </View>
              <TouchableHighlight
                onPress={closeFeedbackModal}
                underlayColor="transparent"
                style={styles.closeButton}
              >
                <FecharIcon />
              </TouchableHighlight>
            </View>
          }
        </Animated.View>
      </Animated.View>
    </>
  )
}

export default Modal