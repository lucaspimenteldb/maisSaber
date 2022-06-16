import React, { useState } from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight, TextInput, Alert } from 'react-native'

import DiamanteIcon from '../../assets/icons/DiamanteIcon.js'
import CoroaJoiasIcon from '../../assets/icons/CoroaJoiasIcon.js'
import CadeadoIcon from '../../assets/icons/CadeadoIcon.js'
import ChangesModal from '../../components/modals/save-changes-modal/Modal.js'
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles';
import Service from './services/service'
import { useSelector } from 'react-redux'

const ChangePasswordScreen = ({ navigation }) => {
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)
  const userLogger = user.user;

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameActive, setNameActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)
  const [showChangesModal, setShowChangesModal] = useState(false)

  const changesModal = showChangesModal ? <ChangesModal bottom close={() => setShowChangesModal(false)} /> : null
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  const handleChangePassword = async () => {
    try {
      if (name === email) {
        await Service.update(name, userLogger.id)
          .then(response => {
            setShowChangesModal(true)
          })
      } else {
        Alert.alert('Aviso', 'Senhas não estão iguais, tente novamente.')
      }
    } catch (error) {
      console.log(error)
      setShowChangesModal(false)
    }
  }

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
            <Text style={styles.userInformationName}>{userLogger.nome}</Text>

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
          <Text style={styles.inputLabel}>Nova senha</Text>
          <View>
            <TextInput
              placeholder="Digite sua nova senha"
              onChangeText={setName}
              value={name}
              style={[styles.input, nameActive ? styles.inputActive : '']}
              onPressIn={() => setNameActive(true)}
              onBlur={() => name ? null : setNameActive(false)}
              secureTextEntry
            />
            <CadeadoIcon style={styles.icon} />
          </View>

          <Text style={styles.inputLabel}>Confirmar nova senha</Text>
          <View>
            <TextInput
              placeholder="Confirme a nova senha"
              onChangeText={setEmail}
              value={email}
              style={[styles.input, emailActive ? styles.inputActive : '']}
              onPressIn={() => setEmailActive(true)}
              onBlur={() => email ? null : setEmailActive(false)}
              secureTextEntry
            />
            <CadeadoIcon style={styles.icon} />
          </View>

          <TouchableHighlight
            onPress={handleChangePassword}
            underlayColor="#fff"
          >
            <View style={styles.buttonSave}>
              <Text style={styles.buttonText}>Salvar alterações</Text>
            </View>
          </TouchableHighlight>
        </View>

      </ScrollView>
      {changesModal}
      {missionsModal}
    </>
  )
}

export default ChangePasswordScreen;