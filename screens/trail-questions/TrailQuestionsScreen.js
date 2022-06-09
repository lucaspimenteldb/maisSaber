import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableHighlight } from 'react-native'

import styles from './styles.js'
import FoguetePequenoIcon from '../../assets/icons/FoguetePequenoIcon.js'
import FecharIcon from '../../assets/icons/FecharIcon.js'

import TrailQuestionReward from '../../components/modals/trail-question-reward/Modal.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const TrailQuestionsScreen = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight()
  const [modal, setModal] = useState(false)
  const [question, setQuestion] = useState({
    title: 'Qual o resultado da adição: 3 + 2?',
    alternatives: [
      {
        alternative: 'A',
        text: '4',
        selected: false,
      },
      {
        alternative: 'B',
        text: '3',
        selected: false,
      },
      {
        alternative: 'C',
        text: '5',
        selected: false,
      },
      {
        alternative: 'D',
        text: '7',
        selected: false,
      },
      {
        alternative: 'E',
        text: '6',
        selected: false,
      },
    ],
    answer: 'C'
  })
  const selectAlternative = (alternativeSelected) => {
    setQuestion(oldQuestion => {
      const newQuestion = { ...oldQuestion }
      newQuestion.alternatives.map(alternative => {
        alternative.alternative === alternativeSelected ? alternative.selected = true : alternative.selected = false
      })
      return newQuestion;
    })
  }
  return (
    <>
      <ScrollView contentContainerStyle={[styles.pageWrapper, {paddingBottom: tabBarHeight}]}>
        <View style={styles.header}>
          <TouchableHighlight
            onPress={() => navigation.navigate('TrailLevels')}
            underlayColor="#fff"
          >
            <FecharIcon color='#f00' />
          </TouchableHighlight>

          <View style={styles.progressBar}>
            <View style={styles.progressInner} />
          </View>

          <FoguetePequenoIcon />
        </View>

        <Text style={styles.textSizeTitle}>Tamanho do texto</Text>
        <View style={styles.textSizeButtons}>
          <TouchableHighlight
            underlayColor="#fff"
            onPress={'a'}
            style={[styles.buttonWrapper, styles.buttonSizeDown]}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                T- Diminuir
                </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#fff"
            onPress={'a'}
            style={styles.buttonWrapper}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                T+ Aumentar
                </Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.questionWrapper}>
          <Text style={styles.levelTitle}>
            Fase 1
          </Text>
          <Text>
            Responda a questão abaixo:
          </Text>

          <Text style={styles.question}>
            {question.title}
          </Text>

          {
            question.alternatives.map(alternative =>
              <TouchableHighlight
                key={'alternative-' + alternative.alternative}
                underlayColor="#620ECC"
                onPress={() => selectAlternative(alternative.alternative)}
                style={[styles.alternativesButton, alternative.selected ? styles.selectedAlternativesButton : '']}
              >
                <Text style={[styles.alternativeText, alternative.selected ? styles.selectedAlternativeText : '']}>
                  {alternative.alternative}- {alternative.text}
                </Text>
              </TouchableHighlight>
            )
          }

          <TouchableHighlight
            underlayColor="#fff"
            onPress={() => setModal(true)}
            style={styles.buttonRewardTouchable}
          >
            <View style={styles.buttonReward}>
              <Text style={styles.buttonRewardText}>
                Ver recompensas
                </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#fff"
            onPress={'a'}
            style={styles.buttonAnswerTouchable}
          >
            <View style={styles.buttonAnswer}>
              <Text style={styles.buttonAnswerText}>
                Responder
                </Text>
            </View>
          </TouchableHighlight>
        </View>

      </ScrollView>
      {modal ? <TrailQuestionReward bottom close={() => setModal(false)}/> : null}
    </>
  )
}

export default TrailQuestionsScreen