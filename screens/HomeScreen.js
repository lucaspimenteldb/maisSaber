import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'

import Diamante from '../assets/Diamante.js'
import CoroaJoias from '../assets/CoroaJoias'

const LoginScreen = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <View style={styles.userInformation}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
            style={styles.userInformationAvatar}
          ></Image>

          <View style={styles.nameProgressWrapper}>
            <Text style={styles.userInformationName}>Anderson Moura</Text>

            <View style={styles.userInformationLevel}>
              <Text style={styles.userInformationLevelText}>Nível 1</Text>
              <Diamante></Diamante>
            </View>

            <View style={styles.progressBar}>
              <View style={styles.progressNumber}>
                <Text style={styles.progressNumberText}>6/20</Text>
                <CoroaJoias></CoroaJoias>
              </View>
              <View style={styles.progressInner} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: '#630FCC',
  },
  userInformation: {
    margin: 12,
    flexDirection: 'row'
  },
  userInformationAvatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: '#fff',
    borderWidth: 4,
  },
  nameProgressWrapper: {
    marginLeft: 24,
    flex: 1,
  },
  userInformationName: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold'
  },
  userInformationLevel: {
    flexDirection: 'row'
  },
  userInformationLevelText: {
    color: '#eee',
    fontSize: 16,
    fontFamily: 'Nunito-Bold'
  },
  progressBar: {
    marginTop: 12,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#8C4EDA',
  },
  progressNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -24,
    right: 0,
  },
  progressNumberText: {
    marginRight: 8,
    fontSize: 14,
    fontFamily: 'Nunito-ExtraBold',
    color: '#fff'
  },
  progressInner: {
    height: 6,
    borderRadius: 4,
    width: '30%',
    backgroundColor: '#fff',
  },
})



export default LoginScreen