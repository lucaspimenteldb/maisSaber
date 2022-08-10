import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image, TextInput, Alert, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

import CadeadoIcon from '../../assets/icons/CadeadoIcon.js'
import ChevronIconLeft from '../../assets/icons/ChevronIconLeft'
import ContaIcon from '../../assets/icons/ContaIcon.js'
import CircleBackgroundRight from '../../assets/icons/CircleBackgroundRight.js'
import Logo from '../../assets/Logo'

import { setIsLoggedIn, setUserReduce } from '../../redux/actions.js'
import Service from './services/service';
import Button from '../../components/button/Button'
import styles from './styles.js'

const HomeScreen = ({ navigation }) => {
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')
  const [registrationActive, setRegistrationActive] = useState(false)
  const [passwordActive, setPasswordActive] = useState(false)
  const [spinner, setSpinner] = useState(false)

  const dispatch = useDispatch()

  const loading = <ActivityIndicator color={"#fff"} />

  const handleLogin = async () => {
    setSpinner(true)
    if (registration !== '' && password !== '') {
      try {
        await Service.login(registration, password)
          .then(response => {
            console.log(response)
            if (response.token) {
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
        <View style={{ marginLeft: 22, marginTop: 30, marginBottom: 32 }}>
          <Logo style={styles.logo} />

        </View>
        <ScrollView contentContainerStyle={styles.pageContentContainer}>
          <View>
            <TouchableHighlight
              onPress={() => navigation.goBack()}
              underlayColor="transparent"
              style={{
                borderBottomWidth: 4,
                borderWidth: 1,
                borderColor: '#44378B',
                borderRadius: 5,
                width: 81,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
                <ChevronIconLeft />
                <Text style={{
                  color: '#44378B',
                  fontFamily: 'Nunito-Bold',
                  fontSize: 12,
                  marginLeft: 8
                }}>Voltar</Text>
              </View>
            </TouchableHighlight>

            <View style={{
              marginTop: 30
            }}>

              <Text style={styles.text}>Olá! 👋</Text>
              <Text style={styles.title}>Seja bem vindo ao aplicativo Evoluir</Text>
            </View>

            <View>
              <Text style={styles.titleInput}>Matrícula</Text>
              <TextInput
                placeholder="Digite aqui sua matrícula"
                onChangeText={setRegistration}
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
                onChangeText={setPassword}
                value={password}
                style={[styles.input, passwordActive ? styles.inputActive : '']}
                onPressIn={() => setPasswordActive(true)}
                onBlur={() => password ? null : setPasswordActive(false)}
                secureTextEntry
              />
              <CadeadoIcon style={styles.icon} />
            </View>
            <Text style={styles.esqueciSenha}>Esqueceu a senha ?</Text>

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
    </>
  )
}

export default HomeScreen