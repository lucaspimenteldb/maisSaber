import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import TurmasIcon from '../../assets/icons/TurmasIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'

const SelecionarDisciplinaTela = ({ route, navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)

  const disciplinas = [
    {
      title: 'Matemática',
      image: require('../../assets/onboarding-carousel.png'),
      route: 'DisciplinaSelecionada',
      professor: 'Prof. Carlos Lima',
      slug: 'matematica',
      notificacoes: 0
    },
    {
      title: 'Português',
      image: require('../../assets/onboarding-carousel.png'),
      route: 'DisciplinaSelecionada',
      professor: 'Profa. Kassandra Maria',
      slug: 'portugues',
      notificacoes: 1,
    },
  ]
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  const { menu, pronoum } = route.params
  const tratarNofiticacoes = (notificacoes) => {
    return !!notificacoes ? (
      <View style={styles.notificacoes}>
        <Text style={styles.notificacoesTexto}>
          {notificacoes}
        </Text>
      </View>
    ) :
      null
  }

  return (
    <>
      <LinearGradient 
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#E53952', '#EE4949', '#E17C1E']}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <TurmasIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Disciplinas</Text>
              <Text style={styles.headerText}>
                Selecione a disciplina para ver {`${pronoum} ${menu.toLowerCase()}`}
              </Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.disciplinasHub, { paddingBottom: tabBarHeight, }]}>
            {/* main hub */}
            <View style={styles.disciplinasHubContainer}>
              {
                disciplinas.map(disciplina => (
                  <TouchableHighlight
                    onPress={() => navigation.navigate('DisciplinaSelecionadaStack', { menu, disciplina: disciplina.title, professor: disciplina.professor })}
                    underlayColor='#fff'
                    style={styles.disciplinasTouchable}
                    key={disciplina.title}
                  >
                    <View style={styles.disciplinasButton}>
                      <Image
                        source={disciplina.image}
                        style={styles.disciplinasImagem}
                      />
                      <View style={styles.disciplinasBody}>
                        <Text style={styles.disciplinasNome}>
                          {disciplina.title}
                        </Text>
                        <Text style={styles.disciplinasProfessor}>
                          {disciplina.professor}
                        </Text>
                        <MuralPublicationArrowIcon style={styles.arrow} />

                        {tratarNofiticacoes(disciplina.notificacoes)}
                      </View>
                    </View>
                  </TouchableHighlight>
                ))
              }
            </View>
          </View>
        </ScrollView>

        {missionsModal}
      </LinearGradient>
    </>
  )
}

export default SelecionarDisciplinaTela