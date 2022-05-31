import React, { useState } from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight } from 'react-native'

import DiamanteIcon from '../../assets/icons/DiamanteIcon.js'
import CoroaJoiasIcon from '../../assets/icons/CoroaJoiasIcon.js'
import ChevronIcon from '../../assets/icons/ChevronIcon.js'
import SignOutModal from '../../components/modals/sign-out-modal/Modal.js'

import styles from './styles';
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../../redux/actions.js'

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [showSignOutModal, setShowSignOutModal] = useState(false)

  options = [
    {
      title: 'Dados pessoais',
      route: () => navigation.navigate('PersonalData'),
    },
    {
      title: 'Dados escolares',
      route: () => navigation.navigate('SchoolData'),
    },
    {
      title: 'Senha',
      route: () => navigation.navigate('ChangePassword'),
    },
    {
      title: 'Sair',
      route: () => setShowSignOutModal(true),
    },
  ]

  const signOutModal = showSignOutModal ? 
    <SignOutModal 
      bottom 
      close={() => setShowSignOutModal(false)}
      signOut={() => dispatch(setIsLoggedIn(false))}
    /> :
    null

  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <TouchableHighlight
          underlayColor='#630FCC'
          onPress={() => navigation.goBack()}
          style={styles.backButtonWrapper}
        >
          <View style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.userInformation}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
            style={styles.userInformationAvatar}
          />

          <View style={styles.nameProgressWrapper}>
            <Text style={styles.userInformationName}>Anderson Moura</Text>

            <View style={styles.userInformationLevel}>
              <Text style={styles.userInformationLevelText}>Nível 1</Text>
              <DiamanteIcon />
            </View>

            <View style={styles.progressBar}>
              <View style={styles.progressNumber}>
                <Text style={styles.progressNumberText}>6/20</Text>
                <CoroaJoiasIcon />
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
                onPress={option.route}
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

        {signOutModal}
      </ScrollView>
    </>
  )
}

export default ProfileScreen;