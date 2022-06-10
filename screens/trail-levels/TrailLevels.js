import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableHighlight } from 'react-native'

import styles from './styles.js'
import LivroMatematicaIcon from '../../assets/icons/LivroMatematicaIcon.js'
import FogueteIcon from '../../assets/icons/FogueteIcon.js'
import CoroaJoias32Icon from '../../assets/icons/CoroaJoias32Icon.js'
import CoroaCinza32Icon from '../../assets/icons/CoroaCinza32Icon.js'
import CadeadoTrilhasIcon from '../../assets/icons/CadeadoTrilhasIcon.js'
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import TrailLevelsLockedModal from '../../components/modals/trail-level-locked/Modal.js'
import { useSelector } from 'react-redux'

const TrailLevelsScreen = ({ navigation }) => {
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const [modal, setModal] = useState(false)
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
  const missionsModal = showMissionsModal ? <MissionsModal /> : null
  const modalTrailLocked = modal ? <TrailLevelsLockedModal close={() => setModal(false)} bottom/> : null

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
                  onPress={level.disabled ? () => setModal(true) : () => navigation.navigate('TrailQuestions')}
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

      { modalTrailLocked }
      { missionsModal }
    </>
  )
}

export default TrailLevelsScreen