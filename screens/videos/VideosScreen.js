import React from 'react'
import { ScrollView, TouchableHighlight, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import LivroIcon from '../../assets/icons/LivroIcon.js'
import OperacoesIcon from '../../assets/icons/OperacoesIcon.js'
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'

const VideosScreen = ({ navigation }) => {
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const missionsModal = showMissionsModal ? <MissionsModal/> : null
  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <View style={styles.disciplines}>
          <View style={styles.buttonsWrapper}>
            <TouchableHighlight
              underlayColor='#fff'
              onPress={() => navigation.navigate('Subjects', {discipline: 'Portuguese'})}
              style={styles.disciplineTouchable}
              >
              <View style={[styles.disciplineButtonPortuguese, styles.disciplineButton]}>
                <LivroIcon />
              </View>
            </TouchableHighlight>
            <Text style={styles.disciplineButtonLabel}>
              Português
            </Text>
          </View>

          <View style={styles.buttonsWrapper}>
            <TouchableHighlight
              underlayColor='#fff'
              onPress={() => navigation.navigate('Subjects', {discipline: 'Math'})}
              style={styles.disciplineTouchable}
            >
              <View style={[styles.disciplineButtonMath, styles.disciplineButton]}>
                <View style={styles.progressIndicator}></View>
                <View style={styles.offsetLayer}></View>
                <OperacoesIcon />
              </View>
            </TouchableHighlight>
            <Text style={styles.disciplineButtonLabel}>
              Matemática
            </Text>
          </View>
        </View>
      </ScrollView>
      {missionsModal}
    </>
  )
}

export default VideosScreen