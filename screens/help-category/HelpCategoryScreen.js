import React from 'react';
import { ScrollView, View, TouchableHighlight, Text } from 'react-native';
import ComputadorAjudaIcon from '../../assets/icons/ComputadorAjudaIcon.js'

import styles from './styles.js'
import ChevronIcon from '../../assets/icons/ChevronIcon.js';

const HelpCategoryScreen = ({ navigation, route }) => {
  const questions = [
    {
      title: 'Videoaulas',
      route: 'HelpText',
    },
    {
      title: 'Trilhas',
      route: 'HelpText',
    },
    {
      title: 'Nível',
      route: 'HelpText',
    },
    {
      title: 'Agenda',
      route: 'HelpText',
    },
  ]

  menu = questions.map(menu => (
    <TouchableHighlight
      key={menu.title}
      style={styles.menuTouchable}
      onPress={() => navigation.navigate(menu.route, {category: route.params.category})}
      underlayColor='#fff'
    >
      <View style={styles.menuWrapper}>
        <Text style={styles.menuText}>
          {menu.title}
        </Text>

        <View style={styles.menuArrow}>
          <ChevronIcon />
        </View>
      </View>
    </TouchableHighlight>
  ))

  return (
    <>
      <View style={styles.page}>
        <TouchableHighlight
          underlayColor='#fff'
          onPress={() => navigation.goBack()}
          style={styles.backButtonWrapper}
        >
          <View style={styles.backButton}>
            <ChevronIcon />
          </View>
        </TouchableHighlight>

        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <ComputadorAjudaIcon />

          <Text style={styles.title}>
            Dúvidas sobre {route.params.category}
          </Text>
          <Text style={styles.description}>
            Perguntas frequentes:
          </Text>

          {menu}
        </ScrollView>
      </View>
    </>
  )
}

export default HelpCategoryScreen