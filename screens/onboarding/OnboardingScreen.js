import React, { useRef, useState } from 'react'
import { ScrollView, Text, View , Image, TouchableHighlight } from 'react-native'

import styles from './styles.js'

const OnboardingScreen = ({navigation}) => {
  const [indicators, setIndicators] = useState([
    {
      active: true,
      carousel: 0,
    },
    {
      active: false,
      carousel: 1,
    },
    {
      active: false,
      carousel: 2,
    },
  ])
  const handleActiveIndicator = (indicatorIndex) => {
    const newIndicators = [...indicators]
    newIndicators.forEach((indicator, currentIndex) => {
      currentIndex === indicatorIndex ? indicator.active = true : indicator.active = false;
    })
    return newIndicators;
  }
  const handleCarouselScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;

    if (scrollX > 530) {
      if (indicators[2].active) return
      return setIndicators(handleActiveIndicator(2))
    }
    if (scrollX > 180) {
      if (indicators[1].active) return
      return setIndicators(handleActiveIndicator(1))
    }
    if (indicators[0].active) return
    setIndicators(handleActiveIndicator(0))
  }
  const carouselSlideTo = (slide) => {
    switch(slide) {
      case 1:
        carouselScroll.current.scrollTo({x: 356});
        break;
      case 2:
        carouselScroll.current.scrollTo({x: 712});
        break;
      default:
        carouselScroll.current.scrollTo({x: 0});
    }
  }

  const carouselContent = [
    {
      image: require('../../assets/onboarding-carousel.png'),
      title: 'GAMIFICAÇÃO NA ESCOLA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et faucibus sed massa in et proin pellentesque Aenean et faucibus sed massa in et proin pellentesque.',
    },
    {
      image: require('../../assets/onboarding-carousel.png'),
      title: 'GAMIFICAÇÃO NAS ESCOLAS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et faucibus sed massa in et proin pellentesque Aenean et faucibus sed massa in et proin pellentesque.',
    },
    {
      image: require('../../assets/onboarding-carousel.png'),
      title: 'GAMIFICAÇÃO NA ESCOLA.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et faucibus sed massa in et proin pellentesque Aenean et faucibus sed massa in et proin pellentesque.',
    },
  ]

  const carouselScroll = useRef()

  return (
    <>
      <ScrollView style={styles.pageWrapper}>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>

        <ScrollView
          horizontal
          onScroll={handleCarouselScroll}
          scrollEventThrottle={100}
          ref={carouselScroll}
        >
          {
            carouselContent.map((content, currentIndex) => 
              <View 
                key={content.title} 
                style={currentIndex === (carouselContent.length - 1) ? styles.lastCarousel : ''}
              >
                <Image 
                  source={content.image}
                  style={styles.carouselImage}
                />
                <Text style={styles.carouselTitle}>{content.title}</Text>
                <Text style={styles.carouselDescription}>
                  {content.description}
                </Text>
              </View>
            )
          }
        </ScrollView>

        <View style={styles.carouselIndicatorsWrapper}>
          {
            indicators.map((indicator, currentIndex) => (
              <TouchableHighlight
                key={indicator.carousel + '-indicator'}
                onPress={() => carouselSlideTo(currentIndex)} 
                underlayColor="#fff"
              >
                <View style={[
                    styles.buttonCarouselIndicator,
                    indicator.active ? styles.buttonCarouselIndicatorActive : ''
                  ]}
                />
              </TouchableHighlight>
            ))
          }
        </View>

        <TouchableHighlight
          onPress={() => 'oi'}
          underlayColor="#fff"
        >
          <View style={styles.buttonSignUp}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('Login')}
          underlayColor="#fff"
        >
          <View style={styles.buttonSignIn}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.whiteBackground}></View>
      </ScrollView>
    </>
  )
}

export default OnboardingScreen