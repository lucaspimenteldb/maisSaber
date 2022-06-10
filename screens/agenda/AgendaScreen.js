import React, { useState } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Agenda } from 'react-native-calendars'

import ChevronIcon from '../../assets/icons/ChevronIcon.js'
import styles from './styles.js'
import { LocaleConfig } from 'react-native-calendars';
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import local from './locale.js'
import { useSelector } from 'react-redux'
LocaleConfig.defaultLocale = 'pt-br';

const AgendaScreen = ({ navigation }) => {
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const dateOffset = 24 * 60 * 60 * 1000 * 5; //5 days in miliseconds
  const minDate = new Date();
  const maxDate = new Date();
  minDate.setTime(minDate.getTime() - dateOffset);
  maxDate.setTime(maxDate.getTime() + dateOffset)

  const agendaComponentItem = (item) => {
    return (
      <View style={styles.agendaItem}>
        <View>
          <Text style={styles.agendaItemText}>
            {item.hour}
          </Text>
          <Text style={styles.agendaItemTitle}>
            {item.name}
          </Text>
          <Text style={styles.agendaItemText}>
            {item.action}
          </Text>
        </View>
        <TouchableHighlight 
          underlayColor='#F2F8FF'
          style={styles.agendaButton}
          onPress={() => navigation.navigate('AgendaNotification')}
        >
          <ChevronIcon color='#00f' style={{transform: [{rotateZ: '180deg' }]}}/>
        </TouchableHighlight>
      </View>
    )
  }
  const missionsModal = showMissionsModal ? <MissionsModal /> : null;
  const [activeTab, setActiveTab] = useState(1);
  const agendaItems = {
    '2022-06-06': [],
    '2022-06-07': [],
    '2022-06-08': [],
    '2022-06-09': [],
    '2022-06-10': [
      {
        name: 'Atividade de português',
        action: 'Clique para morrer',
        hour: '07:00 am',
      },
      {
        name: 'Atividade de português',
        action: 'Clique para visualizar',
        hour: '09:00 am',
      }
    ],
    '2022-06-11': [],
    '2022-06-12': [],
    '2022-06-13': [],
    '2022-06-14': [],
    '2022-06-15': [],
  }
  const isPortuguese = activeTab === 1
  
  return (
    <>
      <View style={styles.pageWrapper}>
        <View style={styles.disciplineTabs}>
          <TouchableHighlight
            style={[
              styles.disciplineTabsTouchable,
              isPortuguese ? styles.disciplineTabsTouchableActive : ''
            ]}
            onPress={() => setActiveTab(1)}
            underlayColor="#B88DEE"
          >
            <View style={[
              styles.disciplineTabsButton,
              isPortuguese ? styles.disciplineTabsButtonActive : ''
            ]}>
              <Text style={[
                styles.disciplineTabsButtonText,
                isPortuguese ? styles.disciplineTabsButtonTextActive : ''
              ]}>
                Português
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.disciplineTabsTouchable,
              styles.disciplineTabsTouchableMath,
              !isPortuguese ? styles.disciplineTabsTouchableActive : ''
            ]}
            onPress={() => setActiveTab(2)}
            underlayColor="#B88DEE"
          >
            <View style={[
              styles.disciplineTabsButton,
              !isPortuguese ? styles.disciplineTabsButtonActive : ''
            ]}>
              <Text style={[
                styles.disciplineTabsButtonText,
                !isPortuguese ? styles.disciplineTabsButtonTextActive : ''
              ]}>
                Matemática
              </Text>
            </View>
          </TouchableHighlight>
        </View>

        <Text style={styles.agendaTitle}>
          Agenda semanal
        </Text>
        <Agenda
          items={agendaItems}
          hideKnob={true}
          minDate={minDate.toISOString().slice(0, 10)}
          maxDate={maxDate.toISOString().slice(0, 10)}
          renderItem={(item) => {
            return agendaComponentItem(item)
          }}
          renderEmptyDate={() => {
            return <View />;
          }}
          dayLoading={false}
          theme={{
            textDayFontSize: 16,
            textDayHeaderFontSize: 13,
            agendaTodayColor: '#779',
            textDayStyle: {
              fontWeight: '700',
            },
            backgroundColor: '#fff',
            selectedDayBackgroundColor: '#0095FF',
          }}
        />
      </View>
      {missionsModal}
    </>
  )
}

export default AgendaScreen;