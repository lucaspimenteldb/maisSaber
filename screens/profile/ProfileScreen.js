import React, { useState } from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight } from 'react-native'

import DiamanteIcon from '../../assets/icons/DiamanteIcon.js'
import CoroaJoiasIcon from '../../assets/icons/CoroaJoiasIcon.js'
import ChevronIcon from '../../assets/icons/ChevronIcon.js'
import SignOutModal from '../../components/modals/sign-out-modal/Modal.js'
import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { setIsLoggedIn } from '../../redux/actions.js'

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)
  const userLogger = user.user;

  const [showSignOutModal, setShowSignOutModal] = useState(false)
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

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
      <LinearGradient
        style={[styles.tabButton, { borderColor: '#480898', backgroundColor: '#480898' }]}
        colors={['#3C368C', '#D02F60']}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.userInformation}>
            <Image
              source={{ uri: `https://admin.plataformaevoluir.com.br/${userLogger.foto}` }}
              style={styles.userInformationAvatar}
            />

            <View style={styles.nameProgressWrapper}>
              <Text style={styles.userInformationName}>{userLogger.nome}</Text>

              <View style={styles.userInformationLevel}>
                <Text style={styles.userInformationLevelText}>{userLogger.email}</Text>
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
                    <ChevronIcon style={styles.profileHubIcon} color="#4B089F" />
                  </View>
                </TouchableHighlight>
              ))
            }
          </View>

          {signOutModal}
          {missionsModal}
        </ScrollView>
      </LinearGradient>
    </>
  )
}

export default ProfileScreen;