import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image, TextInput } from 'react-native'

import styles from './styles.js'

const HomeScreen = ({ navigation }) => {
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')
  const [registrationActive, setRegistrationActive] = useState(false)
  const [passwordActive, setPasswordActive] = useState(false)

  return (
    <>
      <ScrollView style={styles.pageWrapper} contentContainerStyle={styles.pageContentContainer}>
        <View>
          <View style={styles.header}>
            <TouchableHighlight
              underlayColor='#fff'
              onPress={() => navigation.goBack()}
              style={styles.backButtonWrapper}
            >
              <View style={styles.backButton}>
                <Text style={styles.backButtonText}>v</Text>
              </View>
            </TouchableHighlight>
            <Image source={require('../../assets/logo.png')} />
          </View>

          <Text style={styles.text}>Oi, bb</Text>
          <Text style={styles.title}>Entrar no Mais Saber</Text>

          <TextInput
            placeholder="Digite sua matrícula"
            onChangeText={setRegistration}
            value={registration}
            style={[styles.input, registrationActive ? styles.inputActive : '']}
            onPressIn={() => setRegistrationActive(true)}
            onBlur={() => registration ? null : setRegistrationActive(false)}
          ></TextInput>
          <TextInput
            placeholder="Digite sua senha"
            onChangeText={setPassword}
            value={password}
            style={styles.input}
            style={[styles.input, passwordActive ? styles.inputActive : '']}
            onPressIn={() => setPasswordActive(true)}
            onBlur={() => password ? null : setPasswordActive(false)}
            secureTextEntry
          ></TextInput>

        </View>

        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('Login')}
            underlayColor="#fff"
          >
            <View style={styles.buttonSignIn}>
              <Text style={styles.buttonText}>Entrar</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => 'oi'}
            underlayColor="#fff"
          >
            <View style={styles.buttonSignUp}>
              <Text style={styles.buttonText}>Cadastre-se</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen