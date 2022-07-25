import React, { useState, useRef } from 'react'
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native'

import DiamanteIcon from '../../assets/icons/DiamanteIcon.js'
import CoroaJoiasIcon from '../../assets/icons/CoroaJoiasIcon.js'
import VideosHomeIcon from '../../assets/icons/VideosHomeIcon.js'
import NotebookMensagemIcon from '../../assets/icons/NotebookMensagemIcon.js'
import FogueteIcon from '../../assets/icons/FogueteIcon.js'
import LivroAbertoIcon from '../../assets/icons/LivroAbertoIcon.js'
import AprendizadoOnlineIcon from '../../assets/icons/AprendizadoOnlineIcon.js'
import PessoasConexaoIcon from '../../assets/icons/PessoasConexaoIcon.js'
import MensagensHomeIcon from '../../assets/icons/MensagensHomeIcon.js'
import AtividadesHomeIcon from '../../assets/icons/AtividadesHomeIcon.js'
import AvaliacoesHomeIcon from '../../assets/icons/AvaliacoesHomeIcon.js'
import MomentosHomeIcon from '../../assets/icons/MomentosHomeIcon.js'
import CalendarioHomeIcon from '../../assets/icons/CalendarioHomeIcon.js'
import MuralHomeIcon from '../../assets/icons/MuralHomeIcon.js'
import UsuarioIcon from '../../assets/icons/UsuarioIcon.js'
import LogoGrande from '../../assets/LogoGrande.js'
import BackgroundHeader from '../../assets/background-header.js'

import { useDispatch, useSelector } from 'react-redux'
import { setShowShareModal } from '../../redux/actions.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import WelcomeModal from '../../components/modals/welcome-modal/Modal.js'
import ShareModal from '../../components/modals/share-modal/Modal.js'
import Button from '../../components/button/Button'

import styles from './styles.js'

const HomeScreen = ({ navigation }) => {
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
      title: 'GAMIFICAÇÃO NA ESCOLA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
    },
    {
      image: require('../../assets/onboarding-carousel.png'),
      title: 'GAMIFICAÇÃO NAS ESCOLAS',
      description: 'Aenean et faucibus sed massa in et proin.',
    },
    {
      image: require('../../assets/onboarding-carousel.png'),
      title: 'GAMIFICAÇÃO NA ESCOLA.',
      description: 'Aed massa in et proin pellentesque in pellentesque.',
    },
  ]

  const carouselScroll = useRef()
  const tabBarHeight = useBottomTabBarHeight();

  const hub = [
    {
      icon: <VideosHomeIcon />,
      title: 'VÍDEOS',
      route: 'Videos'
    },
    {
      icon: <AvaliacoesHomeIcon />,
      title: 'AVALIAÇÕES',
      route: 'Trilhas'
    },
    {
      icon: <AtividadesHomeIcon />,
      title: 'ATIVIDADES',
      route: 'SelecionarDisciplina',
      pronoum: 'suas'
    },
    {
      icon: <MensagensHomeIcon />,
      title: 'MENSAGENS',
      route: 'Mensagens'
    },
    {
      icon: <MomentosHomeIcon />,
      title: 'MOMENTOS',
      route: 'Momentos'
    },
    {
      icon: <CalendarioHomeIcon />,
      title: 'CALENDARIO',
      route: 'UserLevel'
    },
    {
      icon: <MuralHomeIcon />,
      title: 'MURAL',
      route: 'Mural'
    },
  ]
  // const [showMissionsModal, setShowMissionsModal] = useState(false)
  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { showWelcomeModal } = useSelector(state => state.showWelcomeModalReducer)
  const { showShareModal } = useSelector(state => state.showShareModalReducer)
  // const { user } = useSelector(state => state.userReducer)
  // const userLogger = user.user;

  const missionsModal = showMissionsModal ? <MissionsModal /> : null
  const welcomeModal = showWelcomeModal ? <WelcomeModal bottom data={{ nome: 'lucas' }} /> : null
  const shareModal = showShareModal ? <ShareModal bottom /> : null

  return (
    <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.headerArea}>
            <BackgroundHeader />
          </View>
          <TouchableHighlight 
            style={styles.buttonProfile} 
            onPress={() => navigation.navigate('Profile')}
          >
            <UsuarioIcon color="#fff" />
          </TouchableHighlight>
          {/* <View style={styles.userInformation}>
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
              style={styles.userInformationAvatar}
            />

            <View style={styles.nameProgressWrapper}>
              <Text style={styles.userInformationName}>{userLogger.nome}</Text>

              <View style={styles.userInformationLevel}>
                <Text style={styles.userInformationLevelText}>Nível 1</Text>
                <DiamanteIcon />
              </View>

              <View style={styles.progressBar}>
                <View style={styles.progressNumber}>
                  <Text style={styles.progressNumberText}>6/20</Text>
                  <CoroaJoiasIcon />
                </View>
                <View style={styles.progressInner} />
              </View>
            </View>
          </View> */}

          <View style={styles.fakeContainer} />

          {/* navigation hub */}
          <View style={styles.navigationHub}>
            <ScrollView
              horizontal
              onScroll={handleCarouselScroll}
              scrollEventThrottle={100}
              ref={carouselScroll}
              style={{ top: -100 }}
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
                    <View style={styles.carouselImageFilter}></View>
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
            {/* main hub */}
            <View style={styles.navigationHubContainer}>
              {
                hub.map(button => (
                  <Button
                    key={button.title}
                    width={106}
                    height={97}
                    title={button.title}
                    icon={button.icon}
                    onPress={() => navigation.navigate(button.route, {
                        screen: 'SelecionarDisciplinaStack',
                        params: { menu: button.title, pronoum: button.pronoum }
                      })}
                    />
                ))
              }
            </View>

            {/* secondary hub */}
            {/* <Text style={styles.seeTooTitle}>Veja também</Text>
            <ScrollView horizontal>
              <TouchableHighlight
                onPress={() => navigation.navigate('Ajuda')}
                underlayColor="#fff"
                style={styles.navigationHubTouchableHelp}
              >
                <View style={styles.navigationHubButtonHelp}>
                  <NotebookMensagemIcon />
                  <Text style={styles.navigationHubButtonTextSecondary}>
                    Preciso de ajuda
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => dispatch(setShowShareModal(true))}
                underlayColor="#fff"
                style={styles.navigationHubTouchableShare}
              >
                <View style={styles.navigationHubButtonShare}>
                  <PessoasConexaoIcon />
                  <Text style={styles.navigationHubButtonTextSecondary}>
                    Compartilhar com amigos
                  </Text>
                </View>
              </TouchableHighlight>
            </ScrollView> */}
          </View>
        </ScrollView>

        {missionsModal}
        {welcomeModal}
        {shareModal}
      </View>
    </>
  )
}

export default HomeScreen