import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableHighlight, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay';
import LivroIcon from '../../assets/icons/LivroIcon.js'
import OperacoesIcon from '../../assets/icons/OperacoesIcon.js'
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import Service from './services/service';

import styles from './styles.js'

const VideosScreen = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [disciplines, setDisciplines] = useState([]);
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const missionsModal = showMissionsModal ? <MissionsModal/> : null

  useEffect(() => {
    async function begin () {
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
  },[])

  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <View style={styles.disciplines}>
          {disciplines?.length > 0 ? 
            disciplines.map((discipline, i) => (
              <View style={styles.buttonsWrapper} key={i}>
                <TouchableHighlight
                  underlayColor='#fff'
                  onPress={() => navigation.navigate('Subjects', {discipline})}
                  style={styles.disciplineTouchable}
                >
                  <View style={[styles.disciplineButton, { backgroundColor: discipline.cor_h }]}>
                    <LivroIcon />
                  </View>
                </TouchableHighlight>
                <Text style={styles.disciplineButtonLabel}>
                  {discipline.nome}
                </Text>
              </View>
            )) : <Spinner visible={spinner} />
          }
        </View>
      </ScrollView>
      {missionsModal}
    </>
  )
}

export default VideosScreen