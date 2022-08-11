import React, { useRef, useState } from 'react'
import { ScrollView, Text, View, Image, TouchableHighlight } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import styles from './styles.js'
import Logo from '../../assets/Logo'
import CircleBackgroundRight from '../../assets/icons/CircleBackgroundRight.js'
import Button from '../../components/button/Button.js'

const OnboardingScreen = ({ navigation }) => {
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
    switch (slide) {
      case 1:
        carouselScroll.current.scrollTo({ x: 356 });
        break;
      case 2:
        carouselScroll.current.scrollTo({ x: 712 });
        break;
      default:
        carouselScroll.current.scrollTo({ x: 0 });
    }
  }

  const carouselContent = [
    {
      image: require('../../assets/onboarding-carousel.png'),
      title: 'Recursos Educacionais Digitais',
      description: 'Através de Vídeos, Animações e Videoaulas, você poderá fixar seus conhecimentos para aplicar nas atividades e avaliações.',
    },
    {
      image: require('../../assets/onboarding-carousel-2.png'),
      title: 'Livros Digitais',
      description: 'Visualize os livros didáticos atualizados referentes ao seu ano letivo.',
    },
    {
      image: require('../../assets/onboarding-carousel.png'),
      title: 'Avaliações e Atividades',
      description: 'Responda às avaliações e atividades propostas pelos professores e acompanhe o seu desempenho.',
    },
  ]

  const carouselScroll = useRef()

  return (
    <>
      <LinearGradient
        colors={['#3C368C', '#D02F60']}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      >

        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <Logo style={styles.logo} />

          <ScrollView
            horizontal
            onScroll={handleCarouselScroll}
            scrollEventThrottle={100}
            ref={carouselScroll}
            showsHorizontalScrollIndicator={false}
            style={{
              zIndex: 99,
              elevation: 99
            }}
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
                  <Text style={styles.carouselTitle}>{content.title}</Text>
                  <Text style={styles.carouselDescription}>
                    {content.description}
                  </Text>
                </View>
              )
            }

          </ScrollView>

          <View style={{ alignSelf: 'center', bottom: 30 }}>
            <Button
              width={330}
              height={50}
              fontSize={14}
              borderRadius={10}
              title={'Entrar no aplicativo'}
              onPress={() => navigation.navigate('Login')}
            />
          </View>

          {/* Retirado para V1 */}
          {/* <LinearGradient
            colors={['#3C368C', '#D02F60']}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            style={styles.buttonSignUp}
          >
            <TouchableHighlight
              onPress={() => 'oi'}
              underlayColor="#fff"
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                width: 330,
                height: '88%',
                marginTop: -3.5,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={styles.buttonTextSignUp}>Meu primeiro acesso</Text>
            </TouchableHighlight>
          </LinearGradient> */}

          <View style={styles.whiteBackground}></View>
          
          <CircleBackgroundRight style={{ position: 'absolute', top: 0, right: 0 }} />
          <CircleBackgroundRight style={{ position: 'absolute', zIndex: 0, elevation: 0, top: 130, left: 0 }} />
        </ScrollView>

      </LinearGradient>
    </>
  )
}

export default OnboardingScreen