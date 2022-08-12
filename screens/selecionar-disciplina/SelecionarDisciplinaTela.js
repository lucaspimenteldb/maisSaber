import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image, TextInput } from 'react-native'
import TurmasIcon from '../../assets/icons/TurmasIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'
import LupaIcon from '../../assets/icons/LupaIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'
import Spinner from 'react-native-loading-spinner-overlay';
import { Picker } from '@react-native-picker/picker'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service';

const SelecionarDisciplinaTela = ({ route, navigation }) => {
  const [disciplines, setDisciplines] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [selectPickerVolume, setSelectOptionOne] = useState(0)

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
                Selecione uma disciplina para visualizar os conteúdos
              </Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.disciplinasHub, { paddingBottom: tabBarHeight, }]}>
            <Text style={styles.selectDisciplineText}>Selecione uma disciplina:</Text>

            <View style={styles.pickerArea}>
              <Picker
                dropdownIconColor="#E6E6E6"
                selectedValue={selectPickerVolume}
                onValueChange={async (itemValue, itemIndex) => {
                  console.log(itemValue)
                    if (itemValue == 98) {
                      const response = await Service.getDisciplinas();
                      setDisciplines(response.disciplinas)
                    } else {
                      const disciplinas = await Service.getDisciplinas();

                      let arr = []
                      arr = [...disciplinas.disciplinas]
                      arr.filter((item, i) => i == itemValue).map(disciplina => {
                        let newArr = []
                        newArr.push(disciplina)
                        setDisciplines(newArr)
                        return newArr
                      })
                    }
                  }
                }
              >
                <Picker.Item key={99} value={'99'} label={'Selecione uma disciplina'} color={"#E6E6E6"} />
                <Picker.Item key={98} value={'98'} label={'Todas'} />
                <Picker.Item key={0} value={'0'} label={'Língua Portuguesa'}/>
                <Picker.Item key={1} value={'1'} label={'Matemática'}/>
                <Picker.Item key={2} value={'2'} label={'Arte'}/>
                <Picker.Item key={3} value={'3'} label={'Educação Física'}/>
                <Picker.Item key={4} value={'4'} label={'Língua Inglesa'}/>
                <Picker.Item key={5} value={'5'} label={'Ciências'}/>
                <Picker.Item key={6} value={'6'} label={'Geografia'}/>
                <Picker.Item key={7} value={'7'} label={'História'}/>
                <Picker.Item key={8} value={'8'} label={'Ensino Religioso'}/>

                {/* {disciplines.map((disciplina, i) => (
                  <Picker.Item key={i} value={i} label={disciplina.nome} />
                ))} */}
              </Picker>
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
                          {disciplina.professor ? disciplina.professor : '--'}
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