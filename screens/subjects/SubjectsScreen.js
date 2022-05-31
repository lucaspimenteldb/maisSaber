import React from 'react'
import { ScrollView, TouchableHighlight, Text, View } from 'react-native'
import GeometriaIcon from '../../assets/icons/GeometriaIcon.js'
import CalculadoraMaoIcon from '../../assets/icons/CalculadoraMaoIcon.js'
import OperacoesIcon from '../../assets/icons/OperacoesIcon.js'
import CoroaJoias32Icon from '../../assets/icons/CoroaJoias32Icon.js'
import CoroaCinza32Icon from '../../assets/icons/CoroaCinza32Icon.js'
import CheckIcon from '../../assets/icons/CheckIcon.js'

import styles from './styles.js'

const VideosScreen = ({ route, navigation }) => {
  const isSubjectComplete = (isComplete) => (
    isComplete ? 
      <>
        <CoroaJoias32Icon style={styles.subjectCompleteCrown}/>
        <CheckIcon style={styles.subjectCompleteCheck}/>
      </> :
      <CoroaCinza32Icon style={styles.subjectCompleteCrown}/>
  )
  const selectDisciplineStyle = route.params.discipline === 'Math' ?
    styles.disciplineButtonMath :
    styles.disciplineButtonPortuguese
  const subjects = [
    {
      title: 'Adição e subtração com frações',
      route: 'WatchVideos',
      icon: <CalculadoraMaoIcon />,
      complete: false
    },
    {
      title: 'Figuras geométricas planas',
      route: 'WatchVideos',
      icon: <GeometriaIcon />,
      complete: true
    },
    {
      title: 'Princípio multiplicativo',
      route: 'WatchVideos',
      icon: <OperacoesIcon />,
      complete: false
    },
  ]
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

        <View style={styles.subjects}>
          {
            subjects.map(subject => (
              <View style={styles.buttonsWrapper} key={subject.title}>
                <TouchableHighlight
                  underlayColor='#fff'
                  onPress={() => navigation.navigate(subject.route, {discipline: route.params.discipline})}
                  style={styles.subjectsTouchable}
                  >
                  <View style={[
                    selectDisciplineStyle,
                    styles.disciplineButton]}
                  >
                    {subject.complete ? <View style={styles.progressIndicator}/> : null}
                    {subject.complete ? null : <View style={styles.offsetLayer} />}
                    {subject.icon}
                  </View>
                </TouchableHighlight>
                <Text style={styles.disciplineButtonLabel}>
                  {subject.title}
                </Text>
                {isSubjectComplete(subject.complete)}
              </View>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default VideosScreen