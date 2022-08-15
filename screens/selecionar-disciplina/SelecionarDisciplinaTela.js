import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image, Platform } from 'react-native'
import TurmasIcon from '../../assets/icons/TurmasIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'
import Spinner from 'react-native-loading-spinner-overlay';
import { Picker } from '@react-native-picker/picker'
import { DropdownList } from 'react-native-ultimate-modal-picker'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service';

const SelecionarDisciplinaTela = ({ route, navigation }) => {
  const [disciplines, setDisciplines] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [selectPickerVolume, setSelectOptionOne] = useState(0)
  const [pickerName, setPickerName] = useState('')
  const [listValue, setListValue] = useState('')

  const colorHighlight = '#E6E6E6'
  const colorBlack = '#000'

  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  const items = [
    { label: 'Todas', value: 'Todas' },
    { label: 'Língua Portuguesa', value: 'Língua Portuguesa' },
    { label: 'Matemática', value: 'Matemática' },
    { label: 'Arte', value: 'Arte' },
    { label: 'Educação Física', value: 'Educação Física' },
    { label: 'Língua Inglesa', value: 'Língua Inglesa' },
    { label: 'Ciências', value: 'Ciências' },
    { label: 'Geografia', value: 'Geografia' },
    { label: 'História', value: 'História' },
    { label: 'Ensino Religioso', value: 'Ensino Religioso' }
  ];

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

  const handlePicker = async (itemValue, itemIndex) => {
    itemValue == 98 ? setPickerName('Todas') : null
    if (itemValue == 'Todas' || itemValue == 98) {
      const response = await Service.getDisciplinas();
      setDisciplines(response.disciplinas)
    } else {
      const disciplinas = await Service.getDisciplinas();

      let arr = []
      arr = [...disciplinas.disciplinas]
      arr.filter((item, i) => {
        if (Platform.OS === 'android') {
          return i == itemValue
        } else {
          return item.nome = itemValue
        }
      }).map(disciplina => {
        let newArr = []
        newArr.push(disciplina)
        setPickerName(newArr.map(item => item.nome))
        setDisciplines(newArr)
        return newArr
      })
    }
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
              {Platform.OS === 'android' ?
                ( <Picker
                  dropdownIconColor={colorHighlight}
                  mode="dialog"
                  selectedValue={selectPickerVolume}
                  onValueChange={handlePicker}
                >
                  <Picker.Item key={99} value={'99'} label={pickerName === 'Todas' || pickerName === '' ? 'Todas' : pickerName[0]} color={colorHighlight} />
                  <Picker.Item key={98} value={'98'} label={'Todas'} color={pickerName === 'Todas' ? colorHighlight : colorBlack} />
                  <Picker.Item key={0} value={'0'} label={'Língua Portuguesa'} color={pickerName[0] === 'Língua Portuguesa' ? colorHighlight : colorBlack} />
                  <Picker.Item key={1} value={'1'} label={'Matemática'} color={pickerName[0] === 'Matemática' ? colorHighlight : colorBlack} />
                  <Picker.Item key={2} value={'2'} label={'Arte'} color={pickerName[0] === 'Arte' ? colorHighlight : colorBlack} />
                  <Picker.Item key={3} value={'3'} label={'Educação Física'} color={pickerName[0] === 'Educação Física' ? colorHighlight : colorBlack} />
                  <Picker.Item key={4} value={'4'} label={'Língua Inglesa'} color={pickerName[0] === 'Língua Inglesa' ? colorHighlight : colorBlack} />
                  <Picker.Item key={5} value={'5'} label={'Ciências'} color={pickerName[0] === 'Ciências' ? colorHighlight : colorBlack} />
                  <Picker.Item key={6} value={'6'} label={'Geografia'} color={pickerName[0] === 'Geografia' ? colorHighlight : colorBlack} />
                  <Picker.Item key={7} value={'7'} label={'História'} color={pickerName[0] === 'História' ? colorHighlight : colorBlack} />
                  <Picker.Item key={8} value={'8'} label={'Ensino Religioso'} color={pickerName[0] === 'Ensino Religioso' ? colorHighlight : colorBlack} />
                </Picker> ) :
                (
                  <DropdownList
                    title=" "
                    defaultValue='Selecione uma disciplina'
                    items={items}
                    onChange={(value) => handlePicker(value)}
                    customStyleContainer={{
                      containerLight: {
                        borderColor: 'transparent'
                      }
                    }}
                    customStyleFieldText={{
                      fieldTextLight: {
                        fontSize: 14,
                        fontFamily: 'Nunito-Bold',
                        color: colorHighlight
                      }
                    }}
                  />
                )
              }
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