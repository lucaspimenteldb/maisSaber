import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, ImageBackground } from 'react-native'
import TurmasIcon from '../../assets/icons/TurmasIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import Atividades from './Atividades/Atividades'
import Videos from './Videos/Videos'

import styles from './styles.js'
import PlayIcon from '../../assets/icons/PlayIcon.js'
import MuralIcon from '../../assets/icons/MuralIcon.js'

const DisciplinaSelecionadaTela = ({ route, navigation }) => {
  
  const [atividades, setAtividades] = useState(false)
  const [videos, setVideos] = useState(true)

  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  const { disciplina } = route.params

  const [tabs, setTabs] = useState([
    {
      title: 'Vídeos',
      component: 'a',
      iconAtivo: <PlayIcon />,
      icon: <PlayIcon color='#000'/>,
      route: () => setVideos(!videos),
      ativa: true,
    },
    {
      title: 'Mural',
      component: 'a',
      iconAtivo: <PlayIcon />,
      icon: <PlayIcon color='#000'/>,
      route: () => 'oi',
      ativa: false,
    },
    {
      title: 'Atividades',
      component: 'a',
      iconAtivo: <PlayIcon />,
      icon: <PlayIcon color='#000'/>,
      route: () => setAtividades(true),
      ativa: false,
    },
    {
      title: 'Avaliações',
      component: 'a',
      iconAtivo: <PlayIcon />,
      icon: <PlayIcon color='#000'/>,
      route: () => 'oi',
      ativa: false,
    },
  ]) 
  const ativarTab = (tabAtiva) => {
    setTabs(tabs => {
      const newTabs = [...tabs]
      newTabs.map(tab => {
        tab.route()
        tab.title === tabAtiva ? tab.ativa = true : tab.ativa = false;
      })
      return newTabs;
    })
  }

  const renderTabs = tabs.map(tab => {
    return (
      <TouchableHighlight 
        underlayColor='transparent'
        onPress={() => ativarTab(tab.title)} 
        style={[styles.tabTouchable, tab.ativa ? styles.tabTouchableAtiva : null]}
        key={tab.title}
      >
        {tab.ativa ? 
          <LinearGradient 
            style={[styles.tabButton, { borderColor: '#480898', backgroundColor: '#480898' }]}
            colors={['#3C368C', '#D02F60']}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          >
            {tab.ativa ? tab.iconAtivo : tab.icon}
            <Text style={[styles.tabText, tab.ativa ? styles.tabTextAtiva : null]}>
              {tab.title}
            </Text>
          </LinearGradient>
          :
          <View style={[styles.tabButton, { backgroundColor: '#fff', borderColor: '#480898' }]}>
            {tab.ativa ? tab.iconAtivo : tab.icon}
            <Text style={[styles.tabText, tab.ativa ? styles.tabTextAtiva : null]}>
              {tab.title}
            </Text>
          </View>
        }
      </TouchableHighlight>
    )
  })

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View contentContainerStyle={styles.pageWrapper}>
          <ImageBackground resizeMode='cover' source={{ uri: `https://admin.plataformaevoluir.com.br/${disciplina.imagem}` }} style={styles.header}>
            <View style={styles.opacityContainer} />
            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>{disciplina.nome}</Text>
              <Text style={styles.headerText}>Professor Carlos Lima</Text>
            </View>
          </ImageBackground>

          {/* navigation hub */}
          <View style={[styles.disciplinasHub, { paddingBottom: tabBarHeight, }]}>
            {/* tabs */}
            <ScrollView horizontal>
              {renderTabs}
            </ScrollView>
            {/* main hub */}
            {atividades && <Atividades />}
            {videos && <Videos disciplina={disciplina} />}
          </View>
        </View>

        {missionsModal}
      </ScrollView>
    </>
  )
}

export default DisciplinaSelecionadaTela