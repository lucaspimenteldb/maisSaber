import React from 'react'
import { ScrollView, Text, View, TouchableHighlight } from 'react-native'

import styles from './styles.js'
import LivroMatematicaIcon from '../../assets/icons/LivroMatematicaIcon.js'
import FogueteIcon from '../../assets/icons/FogueteIcon.js'
import CoroaJoias32Icon from '../../assets/icons/CoroaJoias32Icon.js'
import CoroaCinza32Icon from '../../assets/icons/CoroaCinza32Icon.js'
import CadeadoTrilhasIcon from '../../assets/icons/CadeadoTrilhasIcon.js'

const TrailLevelsScreen = ({ navigation }) => {

  const levels = [
    {
      level: 1,
      icon: <LivroMatematicaIcon />,
      crowns: 2,
      route: 'a',
      disabled: false
    },
    {
      level: 2,
      icon: <LivroMatematicaIcon />,
      crowns: 0,
      route: 'a',
      disabled: true
    },
    {
      level: 3,
      icon: <LivroMatematicaIcon />,
      crowns: 0,
      route: 'a',
      disabled: true
    },
    {
      level: 4,
      icon: <LivroMatematicaIcon />,
      crowns: 0,
      route: 'a',
      disabled: true
    },
  ]
  const renderCronws = (crowns) => {
    switch (crowns) {
      case 1:
        return <View style={styles.buttonCrowns}>
          <CoroaJoias32Icon />
          <CoroaCinza32Icon style={styles.buttonMiddleCrown} />
          <CoroaCinza32Icon />
        </View>;
      case 2:
        return <View style={styles.buttonCrowns}>
          <CoroaJoias32Icon />
          <CoroaJoias32Icon style={styles.buttonMiddleCrown} />
          <CoroaCinza32Icon />
        </View>;
      case 3:
        return <View style={styles.buttonCrowns}>
          <CoroaJoias32Icon />
          <CoroaJoias32Icon style={styles.buttonMiddleCrown} />
          <CoroaCinza32Icon />
        </View>;
      default:
        return <View style={styles.buttonCrowns}>
          <CoroaCinza32Icon />
          <CoroaCinza32Icon style={styles.buttonMiddleCrown} />
          <CoroaCinza32Icon />
        </View>;
    }
  }
  const renderLock = (disabled) => disabled ? <CadeadoTrilhasIcon style={styles.buttonLock} /> : null

  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Trilha de Matemática</Text>
            <Text style={styles.progressText}>Seu progresso</Text>
          </View>

          <FogueteIcon style={styles.rocket} />
        </View>
        <View style={styles.progressBar}>
          <View style={styles.progressInner} />
        </View>

        <View style={styles.trailsHub}>
          {
            levels.map(level => (
              <View style={styles.buttonWrapper} key={'level-' + level.level}>
                {renderLock(level.disabled)}
                {renderCronws(level.crowns)}

                <TouchableHighlight
                  onPress={() => navigation.navigate('TrailQuestions')}
                  underlayColor="#fff"
                  style={[styles.buttonTouchable, level.disabled ? styles.buttonTouchableDisabled : '']}
                >
                  <View style={[styles.buttonContent, level.disabled ? styles.buttonContentDisabled : '']}>
                    <LivroMatematicaIcon style={level.disabled ? styles.iconOpacity : ''}/>
                  </View>
                </TouchableHighlight>
                <Text style={[styles.buttonText, level.disabled ? styles.buttonTextDisabled : '']}>
                  {level.level}ª fase
                </Text>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default TrailLevelsScreen