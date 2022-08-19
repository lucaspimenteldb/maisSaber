import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image, TextInput, Alert, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'

import CadeadoIcon from '../../assets/icons/CadeadoIcon.js'
import ChevronIconLeft from '../../assets/icons/ChevronIconLeft'
import ContaIcon from '../../assets/icons/ContaIcon.js'
import CircleBackgroundRight from '../../assets/icons/CircleBackgroundRight.js'
import LogoOnboarding from '../../assets/LogoOnboarding'

import { setIsLoggedIn, setUserReduce } from '../../redux/actions.js'
import Service from './services/service';
import Button from '../../components/button/Button'
import ModalInfo from '../../components/modals/info-modal/Modal'
import styles from './styles.js'

const HomeScreen = ({ navigation }) => {
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')
  const [registrationActive, setRegistrationActive] = useState(false)
  const [passwordActive, setPasswordActive] = useState(false)
  const [accessApp, setAccessApp] = useState(false)
  const [esqueciSenha, setEsqueciSenha] = useState(false)
  const [spinner, setSpinner] = useState(false)

  const dispatch = useDispatch()

  const loading = <ActivityIndicator color={"#fff"} />

  const handleLogin = async () => {
    setSpinner(true)
    if (registration !== '' && password !== '') {
      try {
        await Service.login(registration, password)
          .then(async (response) => {
            console.log(response)
            if (response.token) {
              let token = 'true'
              await AsyncStorage.setItem('matricula', registration);
              await AsyncStorage.setItem('senha', password);
              await AsyncStorage.setItem('token', token);
              dispatch(setUserReduce(response))
              dispatch(setIsLoggedIn(true))
            } else {
              Alert.alert('Aviso!', 'Dados incorretos, tente novamente.'), setSpinner(false)
              setSpinner(false)
            }
          })
      } catch (error) {
        setSpinner(false)
        Alert.alert('Aviso!', 'Não foi possível fazer login no Mais Saber.');
        console.log(error.message)
      }
    } else {
      Alert.alert('Aviso!', 'Preencha os campos corretamente.')
      setSpinner(false)
    }
  }

  return (
    <>
      <LinearGradient
        colors={['#3C368C', '#D02F60']}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        style={styles.pageWrapper}
      >
        <View style={{ marginTop: 40, marginBottom: 32, alignSelf: 'center' }}>
          <LogoOnboarding style={styles.logo} />
        </View>

        <ScrollView contentContainerStyle={styles.pageContentContainer}>
          <View>
            <View style={{
              marginTop: 30
            }}>

              <Text style={styles.text}>Olá! 👋</Text>
              <Text style={styles.title}>Seja bem-vindo ao aplicativo Evoluir</Text>
            </View>
            <TouchableOpacity
              onPress={() => setAccessApp(true)}
            >
              <Text style={styles.accessApp}>Como acessar o aplicativo ?</Text>
            </TouchableOpacity>

            <View>
              <Text style={styles.titleInput}>Matrícula</Text>
              <TextInput
                placeholder="Digite aqui sua matrícula"
                placeholderTextColor={"gray"}
                onChangeText={setRegistration}
                keyboardType="number-pad"
                value={registration}
                style={[styles.input, registrationActive ? styles.inputActive : '']}
                onPressIn={() => setRegistrationActive(true)}
                onBlur={() => registration ? null : setRegistrationActive(false)}
              />
              <ContaIcon style={styles.icon} />
            </View>

            <View>
              <Text style={styles.titleInput}>Senha</Text>
              <TextInput
                placeholder="Digite aqui sua senha"
                placeholderTextColor={"gray"}
                onChangeText={setPassword}
                value={password}
                style={[styles.input, passwordActive ? styles.inputActive : '']}
                onPressIn={() => setPasswordActive(true)}
                onBlur={() => password ? null : setPasswordActive(false)}
                secureTextEntry
              />
              <CadeadoIcon style={styles.icon} />
            </View>
            <TouchableOpacity
              onPress={() => setEsqueciSenha(true)}
            >
              <Text style={styles.esqueciSenha}>Esqueceu a senha ?</Text>
            </TouchableOpacity>

          </View>

          <View style={{ alignSelf: 'center' }}>
            <Button
              width={330}
              height={50}
              fontSize={14}
              borderRadius={10}
              title={'Entrar no aplicativo'}
              onPress={handleLogin}
            />
          </View>
        </ScrollView>
      </LinearGradient>

      <CircleBackgroundRight style={{ position: 'absolute', top: 0, right: 0 }} />
      {accessApp &&
        <ModalInfo
          title='Como acessar o aplicativo ?'
          body='Para realizar o acesso no aplicativo, você precisa solicitar ao seu professor ou gestor, sua matrícula e senha.'
          textButton='Entendi'
          onPress={() => setAccessApp(false)}
        />
      }
      {esqueciSenha &&
        <ModalInfo
          title='Esqueceu a senha ?'
          body='Olá! Para solicitar uma nova senha, entre em contato com o seu professor ou gestor.'
          textButton='Entendi'
          onPress={() => setEsqueciSenha(false)}
        />
      }
    </>
  )
}

export default HomeScreen