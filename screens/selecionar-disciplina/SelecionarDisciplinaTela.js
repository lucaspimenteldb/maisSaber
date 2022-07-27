import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import TurmasIcon from '../../assets/icons/TurmasIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service';

const SelecionarDisciplinaTela = ({ route, navigation }) => {
  const [disciplines, setDisciplines] = useState([]);

  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

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

  useEffect(() => {
    async function begin () {
      try {
        const response = await Service.getDisciplinas();
        setDisciplines(response.disciplinas)
        console.log(disciplines)
      } catch (err) {
        console.log(err)
      }
    }

    begin();
  },[])

  return (
    <>
      <LinearGradient 
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#3C368C', '#D02F60']}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <TurmasIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Disciplinas</Text>
              <Text style={styles.headerText}>
                Selecione a disciplina para ver
              </Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.disciplinasHub, { paddingBottom: tabBarHeight, }]}>
            {/* main hub */}
            <View style={styles.disciplinasHubContainer}>
              {
                disciplines.map(disciplina => (
                  <TouchableHighlight
                    onPress={() => navigation.navigate('DisciplinaSelecionadaStack', { disciplina: disciplina })}
                    underlayColor='#fff'
                    style={styles.disciplinasTouchable}
                    key={disciplina.nome}
                  >
                    <View style={styles.disciplinasButton}>
                      <Image
                        source={{ uri: `https://admin.plataformaevoluir.com.br/${disciplina.imagem_card}` }}
                        style={styles.disciplinasImagem}
                      />
                      <View style={styles.disciplinasBody}>
                        <Text style={styles.disciplinasNome}>
                          {disciplina.nome}
                        </Text>
                        <Text style={styles.disciplinasProfessor}>
                          Prof. Carlos Lima
                        </Text>
                        <MuralPublicationArrowIcon color="#4B089F" style={styles.arrow} />

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