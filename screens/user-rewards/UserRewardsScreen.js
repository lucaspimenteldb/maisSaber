import React from 'react'
import { ScrollView, TouchableHighlight, Text, View } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import DiamanteAzulIcon from '../../assets/icons/DiamanteAzulIcon.js'
import CoroaJoias32Icon from '../../assets/icons/CoroaJoias32Icon.js'

import styles from './styles.js'

const UserLevelScreen = ({ route, navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <>
      <ScrollView contentContainerStyle={[
        styles.pageWrapper,
        { paddingBottom: tabBarHeight }
      ]}>
        <View style={styles.levels}>
          <View style={styles.buttonsWrapper}>
            <Text style={styles.buttonLevel}>Level {route.params.level.level}</Text>
            <TouchableHighlight
              underlayColor='#fff'
              style={styles.levelsTouchable}
            >
              <View style={[styles.button, { backgroundColor: '#09b' }]}>
                <View style={styles.progressIndicator} />
                {route.params.level.icon}
              </View>
            </TouchableHighlight>
            <View style={styles.levelCompleteCrown}>
              <CoroaJoias32Icon style={styles.cronws} />
              <Text style={styles.cronwsText}>{route.params.level.crowns}</Text>
            </View>
            <Text style={styles.buttonLabel}>
              {route.params.level.title}
            </Text>
          </View>
        </View>

        <Text style={styles.seeRewards}>
          Ver recompensas
        </Text>
        <View style={styles.reward}>
          <DiamanteAzulIcon />
        </View>
      </ScrollView>
    </>
  )
}

export default UserLevelScreen