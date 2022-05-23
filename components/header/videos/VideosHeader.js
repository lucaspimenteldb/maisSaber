import React from 'react'
import { View, Text, Image } from 'react-native'

import CoroaIcon from '../../../assets/CoroaIcon.js'

import styles from './styles.js'

const VideosHeader = (props, { navigation }) => {
  return (
    <>
        <View style={[styles.header, props.stacks ? styles.headerStacks : null]}>
          <Image 
            source={require('../../../assets/logo.png')} 
            style={{width: 61, height: 26}}
          />

          <Text style={styles.headerItemsTitle}>{props.title}</Text>

          <View style={styles.crowns}>
            <Text style={styles.crownsText}>6</Text>
            <CoroaIcon></CoroaIcon>
          </View>
        </View>
    </>
  )
}

export default VideosHeader