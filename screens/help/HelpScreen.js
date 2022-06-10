import React from 'react';
import { ScrollView, View, TouchableHighlight, Text } from 'react-native';
import ComputadorAjudaIcon from '../../assets/icons/ComputadorAjudaIcon.js'
import VideoaulasPequenoIcon from '../../assets/icons/VideoaulasPequenoIcon.js'
import TrilhasIcon from '../../assets/icons/TrilhasIcon.js'
import FogueteMiniIcon from '../../assets/icons/FogueteMiniIcon.js'
import AgendaPequenoIcon from '../../assets/icons/AgendaPequenoIcon.js'

import styles from './styles.js'

const HelpScreen = ({navigation}) => {
  const helpMenu = [
    {
      title: 'Videoaulas',
      route: 'HelpCategory',
      category: 'Videoaulas',
      icon: <VideoaulasPequenoIcon />,
      color: '#630FCC',
      borderColor: '#4B089F'
    },
    {
      title: 'Trilhas',
      route: 'HelpCategory',
      category: 'Trilhas',
      icon: <TrilhasIcon />,
      color: '#3A37D2',
      borderColor: '#2421AF'
    },
    {
      title: 'Nível',
      route: 'HelpCategory',
      category: 'Nível',
      icon: <FogueteMiniIcon />,
      color: '#E38700',
      borderColor: '#B96E00'
    },
    {
      title: 'Agenda',
      route: 'HelpCategory',
      category: 'Agenda',
      icon: <AgendaPequenoIcon />,
      color: '#069196',
      borderColor: '#137376'
    },
  ]
  
  menu = helpMenu.map(menu => (
    <TouchableHighlight
      key={menu.category}
      style={styles.menuTouchable}
      onPress={() => navigation.navigate(menu.route, {category: menu.category})}
      underlayColor='#fff'
    >
      <View style={[styles.menuWrapper, {backgroundColor: menu.color, borderBottomColor: menu.borderColor}]}>
        {menu.icon}

        <Text style={styles.menuText}>
          {menu.title}
        </Text>
      </View>
    </TouchableHighlight>
  ))

  return (
    <>
      <View style={styles.page}>
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <ComputadorAjudaIcon />

          <Text style={styles.title}>
            Preciso de ajugda
          </Text>
          <Text style={styles.description}>
            Selecione abaixo a categoria das suas dúvidas:
          </Text>

          {menu}
        </ScrollView>
      </View>
    </>
  )
}

export default HelpScreen