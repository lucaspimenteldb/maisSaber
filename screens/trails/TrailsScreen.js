import React from 'react'
import { ScrollView, Text, View, TouchableHighlight } from 'react-native'

import styles from './styles.js'
import LampadaIcon from '../../assets/icons/LampadaIcon.js'
import LivroMatematicaIcon from '../../assets/icons/LivroMatematicaIcon.js'
import LivroPortuguesIcon from '../../assets/icons/LivroPortuguesIcon.js'
import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import { useSelector } from 'react-redux'

const TrailsScreen = ({ navigation }) => {
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Trilhas</Text>
            <Text style={styles.progressText}>Seu progresso</Text>
          </View>

          <LampadaIcon />
        </View>
        <View style={styles.progressBar}>
          <View style={styles.progressInner} />
        </View>

        <View style={styles.trailsHub}>
          <TouchableHighlight
            onPress={() => navigation.navigate('TrailLevels')}
            underlayColor="#fff"
            style={styles.buttonTouchableMath}
          >
            <View style={styles.buttonMath}>
              <View>
                <Text style={styles.buttonText}>
                  Trilha de Matemática
                </Text>
                <Text style={styles.buttonTextSecondary}>
                  6 fases
                </Text>
              </View>
              <LivroMatematicaIcon />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate('A')}
            underlayColor="#fff"
            style={styles.buttonTouchablePortuguese}
          >
            <View style={styles.buttonPortuguese}>
              <View>
                <Text style={styles.buttonText}>
                  Trilha de português
                </Text>
                <Text style={styles.buttonTextSecondary}>
                  6 fases
                </Text>
              </View>
              <LivroPortuguesIcon />
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
      {showMissionsModal ? <MissionsModal /> : null}
    </>
  )
}

export default TrailsScreen