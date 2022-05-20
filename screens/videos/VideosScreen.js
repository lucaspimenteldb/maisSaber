import React from 'react'
import { ScrollView, TouchableHighlight, Text, View } from 'react-native'

import styles from './styles.js'

const VideosScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <TouchableHighlight
          underlayColor='#fff'
          onPress={() => navigation.goBack()}
          style={styles.backButtonWrapper}
        >
          <View style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.disciplines}>
          <TouchableHighlight
            underlayColor='#fff'
            onPress={() => navigation.navigate('oi')}
            style={styles.disciplineTouchable}
          >
            <View style={[styles.disciplineButtonPortuguese, styles.disciplineButton]}>
              <Text>oi</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='#fff'
            onPress={() => navigation.navigate('oi')}
            style={styles.disciplineTouchable}
          >
            <View style={[styles.disciplineButtonMath, styles.disciplineButton]}>
              <View style={styles.progressIndicator}></View>
              <View style={styles.offsetLayer}></View>
              <Text>oi</Text>
            </View>
          </TouchableHighlight>

        </View>
      </ScrollView>
    </>
  )
}

export default VideosScreen