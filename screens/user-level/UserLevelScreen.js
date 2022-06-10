import React from 'react'
import { ScrollView, TouchableHighlight, Text, View } from 'react-native'
import GeometriaIcon from '../../assets/icons/GeometriaIcon.js'
import CalculadoraMaoIcon from '../../assets/icons/CalculadoraMaoIcon.js'
import OperacoesIcon from '../../assets/icons/OperacoesIcon.js'
import CoroaJoias32Icon from '../../assets/icons/CoroaJoias32Icon.js'
import CadeadoTrilhasIcon from '../../assets/icons/CadeadoTrilhasIcon.js'
import DiamanteAzulIcon from '../../assets/icons/DiamanteAzulIcon.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import styles from './styles.js'

const UserLevelScreen = ({ route, navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const isLevelComplete = (isComplete, crowns) => (
    isComplete ? 
    <View style={styles.levelCompleteCrown}>
      <CoroaJoias32Icon style={styles.cronws}/>
      <Text style={styles.cronwsText}>{crowns}</Text>
    </View> : 
    <CadeadoTrilhasIcon style={styles.levelLock} />
  )
  const levels = [
    {
      title: 'Diamante Rosa',
      route: 'WatchVideos',
      crowns: '7/10',
      icon: <DiamanteAzulIcon />,
      complete: true,
      level: '1',

    },
    {
      title: 'Diamante Azul',
      route: 'WatchVideos',
      crowns: '0',
      icon: <DiamanteAzulIcon />,
      complete: false,
      level: '2',

    },
    {
      title: 'Diamante Verde',
      route: 'WatchVideos',
      crowns: '0',
      icon: <DiamanteAzulIcon />,
      complete: false,
      level: '3',

    },
    {
      title: 'Cristal Rosa',
      route: 'WatchVideos',
      crowns: '0',
      icon: <DiamanteAzulIcon />,
      complete: false,
      level: '4',

    },
    {
      title: 'Cristal Azul',
      route: 'WatchVideos',
      crowns: '0',
      icon: <DiamanteAzulIcon />,
      complete: false,
      level: '5',

    },
    {
      title: 'Cristal Verde',
      route: 'WatchVideos',
      crowns: '0',
      icon: <DiamanteAzulIcon />,
      complete: false,
      level: '6',

    },
  ]
  return (
    <>
      <ScrollView contentContainerStyle={[
        styles.pageWrapper,
        { paddingBottom: tabBarHeight }
      ]}>
        <View style={styles.levels}>
          {
            levels.map(level => (
              <View style={styles.buttonsWrapper} key={level.title}>
                <Text style={styles.buttonLevel}>Level {level.level}</Text>
                <TouchableHighlight
                  underlayColor='#fff'
                  onPress={() => level.complete ? navigation.navigate('UserRewards', {level}) : null }
                  style={[styles.levelsTouchable, { opacity: level.complete ? 1 : 0.5 }]}
                >
                  <View style={[styles.button, { backgroundColor: '#09b' }]}>
                    {level.complete ? <View style={styles.progressIndicator} /> : null}
                    {level.complete ? null : <View style={styles.offsetLayer} />}
                    {level.icon}
                  </View>
                </TouchableHighlight>
                <Text style={styles.buttonLabel}>
                  {level.title}
                </Text>
                {isLevelComplete(level.complete, level.crowns)}

                <TouchableHighlight
                  underlayColor='#fff'
                  onPress={() => level.complete ? navigation.navigate('UserRewards', {level}) : null }
                  style={[styles.buttonRewardWrapper, { opacity: level.complete ? 1 : 0.5 }]}
                >
                  <View style={[
                    styles.buttonReward, 
                    level.complete ? '' : { borderWidth: 0, borderBottomWidth: 0 }
                  ]}>
                    <Text style={styles.buttonRewardText}>Ver recompensas</Text>
                  </View>
                </TouchableHighlight>

              </View>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default UserLevelScreen