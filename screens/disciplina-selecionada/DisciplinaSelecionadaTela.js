import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native'
import TurmasIcon from '../../assets/icons/TurmasIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from "@react-navigation/native"
import LinearGradient from 'react-native-linear-gradient'
import Spinner from 'react-native-loading-spinner-overlay'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import Atividades from './Atividades/Atividades'
import Videos from './Videos/Videos'
import HeaderDisciplina from './HeaderDisciplina/HeaderDisciplina'

import styles from './styles.js'
import Service from './services/service'

import PlayIcon from '../../assets/icons/PlayIcon.js'
import MuralIcon from '../../assets/icons/MuralIcon.js'

const DisciplinaSelecionadaTela = ({ route, navigation }) => {

  const [showAssuntos, setShowAssuntos] = useState(true)
  const [assuntos, setAssuntos] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [finalizado, setFinalizado] = useState(false)

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)
  const userLogger = user.user;

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  const { disciplina } = route.params

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          try {
            setSpinner(true);
            const response = await Service.getSubjects(disciplina.id);
            setAssuntos(response.videos)

            setSpinner(false)
          }
          catch (e) {
            setSpinner(false)
            console.log(e)
          }
        }

        assuntos ? begin() : null

        begin()
      } catch (error) {
        setSpinner(false);
        console.log(error)
      }
    }, []),
  );

  return (
    <>
      <Spinner
        visible={spinner}
      />
      <ScrollView style={{ flex: 1 }}>
        <View contentContainerStyle={styles.pageWrapper}>
          <HeaderDisciplina disciplina={disciplina} />

          <View style={{ marginTop: -50 }}>
            {showAssuntos && <Text style={styles.titleDisciplina}>Vídeos de {disciplina.nome}</Text>}
            {/* navigation hub */}
            {showAssuntos &&
              <>
                {assuntos.map(assunto => (
                  <TouchableOpacity
                    key={assunto.id}
                    style={[styles.cardContent, { borderColor: assunto.situacao === 'finalizado' ? '#167B26' : '#480898' }]}
                    onPress={() => navigation.navigate('VideoaulaSelecionada', { disciplina, assunto })}
                  >
                    <View>
                      <Text style={styles.titleAula}>{assunto.titulo}</Text>
                      <Text style={[styles.statusAula, { color: assunto.situacao === 'finalizado' ? '#167B26' : '#480898' }]}>
                        {assunto.situacao === 'finalizado' ? 'Aula assistida' : 'Aula não assistida'}
                      </Text>
                    </View>
                    <PlayIcon color={assunto.situacao === 'finalizado' ? '#167B26' : "#480898"} />
                  </TouchableOpacity>
                ))}
              </>
            }
          </View>
        </View>
        <View style={{ height: 80 }} />
        {missionsModal}
      </ScrollView>
    </>
  )
}

export default DisciplinaSelecionadaTela