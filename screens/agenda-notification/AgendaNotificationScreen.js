import React, { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

import BalaoAgendaIcon from '../../assets/icons/BalaoAgendaIcon.js'
import ChevronIcon from '../../assets/icons/ChevronIcon.js'
import styles from './styles.js'


const AgendaScreen = ({ navigation }) => {

  return (
    <>
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <TouchableHighlight
          underlayColor='#fff'
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backButton}>
            <ChevronIcon />
          </View>
        </TouchableHighlight>

        <Text style={styles.title}>Pais e mestres</Text>

        <View style={styles.infoSection}>
          <View style={styles.icon}>
            <BalaoAgendaIcon />
          </View>
          <View>
            <Text style={styles.infoText}>Quinta - 09/05</Text>
            <Text style={styles.infoText}>13:00</Text>
          </View>
        </View>

        <View>
          <TouchableHighlight
            style={styles.button}
            underlayColor='#5BBBFF'
            onPress={'o'}
          >
            <Text style={styles.buttonText}>
              Quero participar
            </Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.title}>
          Evento tal
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur cumque non praesentium in, labore nemo quos, aliquam quibusdam at suscipit quam hic quas. Eum nihil dicta quasi, nostrum fugit sint?
        </Text>
      </ScrollView>
    </>
  )
}

export default AgendaScreen;