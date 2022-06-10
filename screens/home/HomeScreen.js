import React, { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native'

import DiamanteIcon from '../../assets/icons/DiamanteIcon.js'
import CoroaJoiasIcon from '../../assets/icons/CoroaJoiasIcon.js'
import TecnologiaIcon from '../../assets/icons/TecnologiaIcon.js'
import NotebookMensagemIcon from '../../assets/icons/NotebookMensagemIcon.js'
import FogueteIcon from '../../assets/icons/FogueteIcon.js'
import LivroAbertoIcon from '../../assets/icons/LivroAbertoIcon.js'
import AprendizadoOnlineIcon from '../../assets/icons/AprendizadoOnlineIcon.js'
import PessoasConexaoIcon from '../../assets/icons/PessoasConexaoIcon.js'


import { useDispatch, useSelector } from 'react-redux'
import { setShowShareModal } from '../../redux/actions.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import WelcomeModal from '../../components/modals/welcome-modal/Modal.js'
import ShareModal from '../../components/modals/share-modal/Modal.js'

import styles from './styles.js'

const HomeScreen = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();

  const hub = [
    {
      icon: <TecnologiaIcon />,
      title: 'VÍDEOS',
      route: 'Videos'
    },
    {
      icon: <AprendizadoOnlineIcon />,
      title: 'TRILHAS',
      route: 'Trilhas'
    },
    {
      icon: <FogueteIcon />,
      title: 'NÍVEL',
      route: 'UserLevel'
    },
    {
      icon: <LivroAbertoIcon />,
      title: 'AGENDA',
      route: 'Agenda'
    },
  ]
  // const [showMissionsModal, setShowMissionsModal] = useState(false)
  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { showWelcomeModal } = useSelector(state => state.showWelcomeModalReducer)
  const { showShareModal } = useSelector(state => state.showShareModalReducer)

  return (
    <>
      <View style={{flex: 1, paddingBottom: tabBarHeight, backgroundColor: '#fff'}}>
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

          {/* navigation hub */}
          <View style={styles.navigationHub}>
            {/* main hub */}
            <View style={styles.navigationHubContainer}>
              {
                hub.map(button => (
                  <TouchableHighlight 
                    key={button.title} 
                    onPress={() => navigation.navigate(button.route)}
                    underlayColor='#fff'
                    style={styles.navigationHubTouchable}
                  >
                    <View style={styles.navigationHubButton}>
                      {button.icon}
                      <Text style={styles.navigationHubButtonText}>
                        {button.title}
                      </Text>
                    </View>
                  </TouchableHighlight>
                ))
              }
            </View>

            {/* secondary hub */}
            <Text style={styles.seeTooTitle}>Veja também</Text>
            <ScrollView horizontal>
              <TouchableHighlight 
                onPress={() => navigation.navigate('A')}
                underlayColor="#fff"
                style={styles.navigationHubTouchableHelp}
              >
                <View style={styles.navigationHubButtonHelp}>
                  <NotebookMensagemIcon/>
                  <Text style={styles.navigationHubButtonTextSecondary}>
                    Preciso de ajuda
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => dispatch(setShowShareModal(true))} 
                underlayColor="#fff"
                style={styles.navigationHubTouchableShare}
              >
                <View style={styles.navigationHubButtonShare}>
                  <PessoasConexaoIcon/>
                  <Text style={styles.navigationHubButtonTextSecondary}>
                    Compartilhar com amigos
                  </Text>
                </View>
              </TouchableHighlight>
            </ScrollView>
          </View>
        </ScrollView>
        
        {showMissionsModal ? <MissionsModal /> : null}
        {showWelcomeModal ? <WelcomeModal bottom/> : null}
        {showShareModal ? <ShareModal bottom/> : null}
      </View>
    </>
  )
}

export default HomeScreen