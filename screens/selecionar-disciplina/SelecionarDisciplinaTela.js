import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image, TextInput } from 'react-native'
import TurmasIcon from '../../assets/icons/TurmasIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'
import LupaIcon from '../../assets/icons/LupaIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'
import Spinner from 'react-native-loading-spinner-overlay';

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service';

const SelecionarDisciplinaTela = ({ route, navigation }) => {
  const [disciplines, setDisciplines] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const [searchDiscipline, setSearchDiscipline] = useState('')

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

  const handleSearch = () => {
    // TODO: Função para filtrar disciplina pelo titulo da disciplina
  }

  useEffect(() => {
    async function begin() {
      try {
        setSpinner(true)
        const response = await Service.getDisciplinas();
        setDisciplines(response.disciplinas)
        setSpinner(false)
      } catch (err) {
        console.log(err)
      }
    }

    begin();
  }, [])

  return (
    <>
      <Spinner visible={spinner} />
      <LinearGradient
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#3C368C', '#D02F60']}
        start={{ x: 0, y: 0 }} end={{ x: 1.0, y: 0 }}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <TurmasIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Disciplinas</Text>
              <Text style={styles.headerText}>
                Selecione uma disciplina para assistir as videoaulas
              </Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.disciplinasHub, { paddingBottom: tabBarHeight, }]}>
            <Text style={styles.selectDisciplineText}>Selecione uma disciplina:</Text>

            <View style={styles.searchArea}>
              <TextInput 
                placeholder={"Buscar disciplina"}
                style={styles.input}
                value={searchDiscipline}
                onChangeText={(e) => setSearchDiscipline(e)}
                onSubmitEditing={handleSearch}
              />
              <LupaIcon style={styles.iconInput} onPress={handleSearch} />
            </View>

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