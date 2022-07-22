import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import TurmasIcon from '../../assets/icons/TurmasIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import BolsaIcon from '../../assets/icons/BolsaIcon.js'
import PlayIcon from '../../assets/icons/PlayIcon.js'
import MuralIcon from '../../assets/icons/MuralIcon.js'

const DisciplinaSelecionadaTela = ({ route, navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const atividades = {
    ultima: { status: 'Aberta', entrega: '04/04/2022', id: 1 },
    fazer: [
      { status: 'Aberta', entrega: '04/04/2022', id: 2 },
      { status: 'Aberta', entrega: '07/04/2022', id: 3 }
    ],
    feitas: [
      { status: 'Feita', entrega: '11/03/2022', id: 4, estilo: styles.atividadeStatusFeita, cor: '#480898' }
    ],
    expiradas: [
      { status: 'Expirada', entrega: '03/01/2022', id: 5, estilo: styles.atividadeStatusExpirada, cor: '#980808' }
    ]
  }
  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  const { menu, disciplina, professor } = route.params

  const CardAtividade = (atividade) => {
    return (
      <TouchableHighlight
        underlayColor='#fff'
        onPress={() => navigation.navigate('FazerAtividade', {
          quantidadeQuestoes: 4,
          questoes: [
            {
              questao: 1,
              tipo: 'questao',
              titulo: 'Qual o resultado da soma 2 + 2?',
              alternativas: [
                {
                  alternativa: 'A',
                  texto: '3',
                },
                {
                  alternativa: 'B',
                  texto: '3',
                },
                {
                  alternativa: 'C',
                  texto: '3',
                },
                {
                  alternativa: 'D',
                  texto: '3',
                },
              ]
            },
            {
              questao: 2,
              tipo: 'enviar',
              texto: 'Explicabo nam possimus aspernatur adipisci saepe, perspiciatis fugit assumenda rem, repudiandae aut maxime deserunt voluptate esse consequatur ea doloremque id vitae non!'
            },
            {
              questao: 3,
              tipo: 'video',
              titulo: 'Adição',
              texto: 'Tempora voluptatum provident soluta? Quas nihil laborum, quaerat minus, magni iste nemo natus repudiandae consequatur unde, perferendis beatae alias eveniet dolorum dolor.',
              video: 'url'
            },
            {
              questao: 4,
              tipo: 'arquivo',
              titulo: 'Matemática',
              texto: 'Explicabo nam possimus aspernatur adipisci saepe, perspiciatis fugit assumenda rem, repudiandae aut maxime deserunt voluptate esse consequatur ea doloremque id vitae non!'
            },
          ]
        })}
        style={styles.atividadesTouchable}
        key={atividade.id}
      >
        <View>
          <BolsaIcon style={styles.bolsa} color={atividade.cor ? atividade.cor : '#37A949'} />
          <Text style={styles.atividadeTitle}>Atividade</Text>
          <Text style={styles.atividadeData}>Data de entrega: {atividade.entrega}</Text>

          <View style={styles.atividadeFooter}>
            <Text style={atividade.estilo ? atividade.estilo : styles.atividadeStatus}>
              {atividade.status}
            </Text>
            <Text style={styles.atividadeDica}>Toque para visualizar</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  const [tabs, setTabs] = useState([
    {
      title: 'Vídeos',
      component: 'a',
      iconAtivo: <PlayIcon />,
      icon: <PlayIcon color='#fff'/>,
      ativa: true,
    },
    {
      title: 'Mural',
      component: 'a',
      iconAtivo: <PlayIcon />,
      icon: <PlayIcon color='#fff'/>,
      ativa: false,
    },
    {
      title: 'Atividades',
      component: 'a',
      iconAtivo: <PlayIcon />,
      icon: <PlayIcon color='#fff'/>,
      ativa: false,
    },
    {
      title: 'Avaliações',
      component: 'a',
      iconAtivo: <PlayIcon />,
      icon: <PlayIcon color='#fff'/>,
      ativa: false,
    },
  ])
  const ativarTab = (tabAtiva) => {
    setTabs(tabs => {
      const newTabs = [...tabs]
      newTabs.map(tab => {
        tab.title === tabAtiva ? tab.ativa = true : tab.ativa = false;
      })
      return newTabs;
    })
  }

  const renderTabs = tabs.map(tab => {
    return (
      <TouchableHighlight 
        underlayColor={tab.ativa ? '#480898' : '#fff'}
        onPress={() => ativarTab(tab.title)} 
        style={[styles.tabTouchable, tab.ativa ? styles.tabTouchableAtiva : null]}
        key={tab.title}
      >
        <LinearGradient 
          style={styles.tabButton}
          colors={['#E9404F', '#ED5E30' ]}
        >
          {tab.ativa ? tab.iconAtivo : tab.icon}
          <Text style={[styles.tabText, tab.ativa ? styles.tabTextAtiva : null]}>
            {tab.title}
          </Text>
        </LinearGradient>
      </TouchableHighlight>
    )
  })

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#4B089F' }}>
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>{disciplina}</Text>
              <Text style={styles.headerText}>{professor}</Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.disciplinasHub, { paddingBottom: tabBarHeight, }]}>
            {/* tabs */}
            <ScrollView horizontal>
              {renderTabs}
            </ScrollView>
            {/* main hub */}
            <View style={styles.disciplinasHubContainer}>
              <Text style={styles.title}>
                Última atividade adicionada
              </Text>
              {CardAtividade(atividades.ultima)}

              {/* a fazer */}
              <Text style={styles.title}>
                Para fazer
              </Text>
              <ScrollView horizontal>
                {atividades.fazer.map(atividade => CardAtividade(atividade))}
              </ScrollView>

              {/* feitas */}
              <Text style={styles.title}>
                Feitas
              </Text>
              <ScrollView horizontal>
              {atividades.feitas.map(atividade => CardAtividade(atividade))}
              </ScrollView>

              {/* expirada */}
              <Text style={styles.title}>
                Expiradas
              </Text>
              <ScrollView horizontal>
              {atividades.expiradas.map(atividade => CardAtividade(atividade))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        {missionsModal}
      </View>
    </>
  )
}

export default DisciplinaSelecionadaTela