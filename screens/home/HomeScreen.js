import React from 'react'
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native'

import Diamante from '../../assets/Diamante.js'
import CoroaJoias from '../../assets/CoroaJoias'
import TecnologiaIcon from '../../assets/TecnologiaIcon.js'
import NotebookMensagemIcon from '../../assets/NotebookMensagemIcon.js'
import FogueteIcon from '../../assets/FogueteIcon.js'
import LivroAbertoIcon from '../../assets/LivroAbertoIcon.js'
import AprendizadoOnlineIcon from '../../assets/AprendizadoOnlineIcon.js'
import PessoasConexaoIcon from '../../assets/PessoasConexaoIcon.js'

import Modal from '../../components/modal/Modal.js'
import styles from './styles.js'

const LoginScreen = ({navigation}) => {
  const hub = [
    {
      icon: <TecnologiaIcon />,
      title: 'VÍDEOS',
      route: 'a'
    },
    {
      icon: <AprendizadoOnlineIcon />,
      title: 'TRILHAS',
      route: 'a'
    },
    {
      icon: <FogueteIcon />,
      title: 'NÍVEL',
      route: 'a'
    },
    {
      icon: <LivroAbertoIcon />,
      title: 'AGENDA',
      route: 'a'
    },
  ]

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
          {/* main hub */}
          <View style={styles.navigationHubContainer}>
            {
              hub.map(button => (
                <TouchableHighlight 
                  key={button.title} 
                  onPress={() => navigation.navigate(button.route)}
                  underlayColor='#fff'
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
            <TouchableHighlight onPress={() => navigation.navigate('A')} underlayColor="#fff">
              <View style={styles.navigationHubButtonHelp}>
                <NotebookMensagemIcon/>
                <Text style={styles.navigationHubButtonTextSecondary}>
                  Preciso de ajuda
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('A')} underlayColor="#fff">
              <View style={styles.navigationHubButtonShare}>
                <PessoasConexaoIcon/>
                <Text style={styles.navigationHubButtonTextSecondary}>
                  Compartilhar com amigos
                </Text>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </View>

        <Modal />
      </ScrollView>
    </>
  )
}

export default LoginScreen