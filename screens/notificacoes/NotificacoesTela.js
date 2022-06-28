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
import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay';
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service'

const HomeScreen = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [notificacoes, setNotificacoes] = useState([]);

  const tabBarHeight = useBottomTabBarHeight();

  const renderNotificacoes = notificacoes?.map((notificacao) => (
    <TouchableHighlight
      key={notificacao.id}
      onPress={() => navigation.navigate('MuralPublication')}
      underlayColor='#fff'
      style={styles.notificationTouchable}
    >
      <View style={styles.notificationButton}>
        {notificacao.icone === 'atividade' && <NotificacaoAtividadeIcon /> }
        {notificacao.icone === 'avaliação' && <NotificacaoAvaliacaoIcon /> }
        {notificacao.icone === 'evento' && <NotificacaoEventoIcon /> }
        {notificacao.icone === 'lembrete' && <NotificacaoLembreteIcon /> }
        {notificacao.icone === 'publicacao' && <NotificacaoPublicacaoIcon /> }
        {notificacao.icone === 'recomendacao' && <NotificacaoRecomendacaoIcon /> }
        <View style={styles.notificationBody}>
          <Text style={styles.notificationOwner}>
            {notificacao.titulo}
          </Text>
          <Text style={styles.notificationDescription}>
            {notificacao.descricao}
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
  const { user } = useSelector(state => state.userReducer)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          setSpinner(true)
          const response = await Service.getNotifications(user.turma[0].id)
          setNotificacoes(response.notificacao)
          setSpinner(false)
        }
  
        begin()
      } catch (error) {
        setSpinner(false);
        console.log(error)
      }
    }, []),
  );

  return (
    <>
      <Spinner
        visible={spinner}
      />
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
          <View style={[styles.notificationHub, {paddingBottom: tabBarHeight}]}>
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