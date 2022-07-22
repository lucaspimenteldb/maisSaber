import React, { useState } from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight, TextInput } from 'react-native'

import DiamanteIcon from '../../assets/icons/DiamanteIcon.js'
import CoroaJoiasIcon from '../../assets/icons/CoroaJoiasIcon.js'
import BolsaIcon from '../../assets/icons/BolsaIcon.js'
import ChapeuEducacaoIcon from '../../assets/icons/ChapeuEducacaoIcon.js'
import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import styles from './styles';
import { useSelector } from 'react-redux'

const SchoolDataScreen = ({navigation}) => {
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)

  const [name, setName] = useState(user.escola[0].nome)
  const [email, setEmail] = useState(user.turma[0].descricao)
  const [nameActive, setNameActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

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
            <Text style={styles.userInformationName}>{user.user.nome}</Text>

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
          <Text style={styles.inputLabel}>Escola</Text>
          <View>
            <TextInput
              placeholder="Digite seu nome"
              onChangeText={setName}
              value={name}
              style={[styles.input, nameActive ? styles.inputActive : '']}
              onPressIn={() => setNameActive(true)}
              onBlur={() => name ? null : setNameActive(false)}
              editable={false}
            />
            <ChapeuEducacaoIcon style={styles.icon}/>
          </View>

          <Text style={styles.inputLabel}>Turma</Text>
          <View>
            <TextInput
              placeholder="Digite seu email"
              onChangeText={setEmail}
              value={email}
              style={[styles.input, emailActive ? styles.inputActive : '']}
              onPressIn={() => setEmailActive(true)}
              onBlur={() => email ? null : setEmailActive(false)}
              editable={false}
            />
            <BolsaIcon style={styles.icon}/>
          </View>
        </View>
      </ScrollView>
      {missionsModal}
    </>
  )
}

export default SchoolDataScreen;