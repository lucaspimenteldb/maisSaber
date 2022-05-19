import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'

import Diamante from '../assets/Diamante.js'
import CoroaJoias from '../assets/CoroaJoias'
import TecnologiaIcon from '../assets/TecnologiaIcon.js'
import NotebookMensagemIcon from '../assets/NotebookMensagemIcon.js'

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

        {/* navigation hub */}
        <View style={styles.navigationHub}>
          <TouchableHighlight style={styles.navigationHubButton}>
            <View>
              <TecnologiaIcon></TecnologiaIcon>
              <Text>Teste</Text>
            </View>
          </TouchableHighlight>

          <Text style={styles.seeTooTitle}>Veja também</Text>
          <ScrollView horizontal>
            <TouchableHighlight style={styles.navigationHubButtonHelp}>
              <View>
                <NotebookMensagemIcon></NotebookMensagemIcon>
                <Text>Preciso de ajuda</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navigationHubButtonShare}>
              <View>
                <NotebookMensagemIcon></NotebookMensagemIcon>
                <Text>Compartilhar com amigos</Text>
              </View>
            </TouchableHighlight>
          </ScrollView>
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
  // navigation hub styles
  navigationHub: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  navigationHubButton: {
    backgroundColor: '#630FCC',
    borderRadius: 14,
    borderBottom: 4,
    borderBottomColor: '#5C23A4'
  },
  navigationHubButtonHelp: {
    backgroundColor: '#1884D0',
    borderRadius: 14,
    borderBottom: 4,
    borderBottomColor: '#0A65A5'
  },
  navigationHubButtonShare: {
    backgroundColor: '#9E1C36',
    borderRadius: 14,
    borderBottom: 4,
    borderBottomColor: '#64081A'
  },
  seeTooTitle: {
    marginTop: 30,
    marginBottom: 18,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
  }
})



export default LoginScreen