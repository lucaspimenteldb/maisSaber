import React, { useState } from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight, TextInput, Alert } from 'react-native'

import DiamanteIcon from '../../assets/icons/DiamanteIcon.js'
import CoroaJoiasIcon from '../../assets/icons/CoroaJoiasIcon.js'
import ContaIcon from '../../assets/icons/ContaIcon.js'
import ChangesModal from '../../components/modals/save-changes-modal/Modal.js'
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles';
import Service from './services/service'
import { useSelector, useDispatch } from 'react-redux'
import { setUserReduce } from '../../redux/actions.js'
import LinearGradient from 'react-native-linear-gradient'

const PersonalDataScreen = ({ navigation }) => {
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)
  const userLogger = user.user;
  const dispatch = useDispatch()

  const [name, setName] = useState(userLogger.nome)
  const [email, setEmail] = useState(userLogger.email)
  const [nameActive, setNameActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)
  const [showChangesModal, setShowChangesModal] = useState(false)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null
  const changesModal =  showChangesModal ? <ChangesModal bottom close={() => setShowChangesModal(false)} /> : null

  const handleUpdate = async () => {
    try {
      await Service.update(name, email, userLogger.id)
        .then(item => {
          user.user.nome = name;
          user.user.email = email;
          dispatch(setUserReduce(user))
          setShowChangesModal(true)
        }).catch(err => {
          console.log(err)
          Alert.alert('Falha na conexão', 'Houve um erro ao conectar-se com o servidor, tente novamente mais tarde.')
        })
    } catch (err) {
      console.log(err)
      setShowChangesModal(false)
    }
  }

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
            <Text style={styles.inputLabel}>Nome</Text>
            <View>
              <TextInput
                placeholder="Digite seu nome"
                onChangeText={setName}
                value={name}
                style={[styles.input, nameActive ? styles.inputActive : '']}
                onPressIn={() => setNameActive(true)}
                onBlur={() => name ? null : setNameActive(false)}
              />
              <ContaIcon style={styles.icon}/>
            </View>

            <Text style={styles.inputLabel}>Email</Text>
            <View>
              <TextInput
                placeholder="Digite seu email"
                onChangeText={setEmail}
                value={email}
                style={[styles.input, emailActive ? styles.inputActive : '']}
                onPressIn={() => setEmailActive(true)}
                onBlur={() => email ? null : setEmailActive(false)}
              />
              <ContaIcon style={styles.icon}/>
            </View>

            <TouchableHighlight
              onPress={handleUpdate}
              underlayColor="#fff"
            >
              <LinearGradient
                style={styles.buttonSave}
                colors={['#3C368C', '#D02F60']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              >
                <Text style={styles.buttonText}>Salvar alterações</Text>
              </LinearGradient>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </LinearGradient>
        {changesModal}
        {missionsModal}
    </>
  )
}

export default PersonalDataScreen;