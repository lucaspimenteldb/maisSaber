import React from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight } from 'react-native'

import Diamante from '../../assets/Diamante.js'
import CoroaJoias from '../../assets/CoroaJoias.js'
import ChevronIcon from '../../assets/ChevronIcon.js'

import styles from './styles';

const ProfileScreen = () => {
  options = [
    {
      title: 'Dados pessoais',
      route: 'PersonalData',
    },
    {
      title: 'Dados escolares',
      route: 'SchoolData',
    },
    {
      title: 'Senha',
      route: 'Password',
    },
    {
      title: 'Sair',
      route: 'SchoolData',
      action: 'sair'
    },
  ]
  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <View style={styles.userInformation}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
            style={styles.userInformationAvatar}
          />

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

        <View style={styles.profileHub}>
          {
            options.map(option => (
              <TouchableHighlight 
                key={option.title}
                onPress={() => navigation.navigate(option.route)}
                underlayColor={'#fff'}
              >
                <View style={styles.profileHubButton}>
                  <Text style={styles.profileHubButtonText}>
                    {option.title}
                  </Text>
                  <ChevronIcon style={styles.profileHubIcon} color="#630FCC" />
                </View>
              </TouchableHighlight>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default ProfileScreen;