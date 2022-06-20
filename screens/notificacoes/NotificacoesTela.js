import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import SinoIcon from '../../assets/icons/SinoIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'
import NotificacaoAtividadeIcon from '../../assets/icons/NotificacaoAtividadeIcon.js'
import NotificacaoAvaliacaoIcon from '../../assets/icons/NotificacaoAvaliacaoIcon.js'
import NotificacaoEventoIcon from '../../assets/icons/NotificacaoEventoIcon.js'
import NotificacaoLembreteIcon from '../../assets/icons/NotificacaoLembreteIcon.js'
import NotificacaoPublicacaoIcon from '../../assets/icons/NotificacaoPublicacaoIcon.js'
import NotificacaoRecomendacaoIcon from '../../assets/icons/NotificacaoRecomendacaoIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'

const HomeScreen = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const notificacoes = [
    {
      texto: 'Seu professor postou uma nova atividade',
      professor: 'Profa. Kassandra',
      icon: <NotificacaoAtividadeIcon />
    },
    {
      texto: 'Seu professor postou uma nova avaliacao',
      professor: 'Profa. Kassandra',
      icon: <NotificacaoAvaliacaoIcon />
    },
    {
      texto: 'Seu professor postou um novo lembrete',
      professor: 'Profa. Kassandra',
      icon: <NotificacaoEventoIcon />
    },
    {
      texto: 'Seu professor postou uma nova recomendacao de aula',
      professor: 'Profa. Kassandra',
      icon: <NotificacaoLembreteIcon />
    },
    {
      texto: 'Seu professor postou uma nova publicacao',
      professor: 'Profa. Kassandra',
      icon: <NotificacaoPublicacaoIcon />
    },
    {
      texto: 'Seu professor postou um novo evento',
      professor: 'Profa. Kassandra',
      icon: <NotificacaoRecomendacaoIcon />
    },
  ]
  const renderNotificacoes = notificacoes.map((notificacao, indexAtual) => (
    <TouchableHighlight
      key={notificacao.professor + indexAtual}
      onPress={() => navigation.navigate('MuralPublication')}
      underlayColor='#fff'
      style={styles.notificationTouchable}
    >
      <View style={styles.notificationButton}>
        { notificacao.icon }
        <View style={styles.notificationBody}>
          <Text style={styles.notificationOwner}>
            {notificacao.professor}
          </Text>
          <Text style={styles.notificationDescription}>
            {notificacao.texto}
          </Text>
          <View style={styles.notificationFooter}>
            <MuralPublicationArrowIcon />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  ))

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  return (
    <>
      <View style={{ flex: 1, paddingBottom: tabBarHeight, backgroundColor: '#4B089F' }}>
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <SinoIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Notificações</Text>
              <Text style={styles.headerText}>Todas as notificações dos seus professores</Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={styles.notificationHub}>
            {/* main hub */}
            <View style={styles.notificationHubContainer}>
              {renderNotificacoes}
            </View>
          </View>
        </ScrollView>

        {missionsModal}
      </View>
    </>
  )
}

export default HomeScreen