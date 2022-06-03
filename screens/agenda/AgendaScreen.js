import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Image, TouchableHighlight } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

import styles from './styles.js'
import { LocaleConfig } from 'react-native-calendars';

import local from './locale.js'
LocaleConfig.defaultLocale = 'pt-br';

const AgendaScreen = ({ navigation }) => {
  const dateOffset = 24 * 60 * 60 * 1000 * 5; //5 days in miliseconds
  const minDate = new Date();
  const maxDate = new Date();
  minDate.setTime(minDate.getTime() - dateOffset);
  maxDate.setTime(maxDate.getTime() + dateOffset)

  const agendaComponentItem = (item) => {
    return (
      <View style={styles.agendaItem}>
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
    )
  }

  const [activeTab, setActiveTab] = useState(1);
  const agendaItems = {
    '2022-05-27': [],
    '2022-05-28': [],
    '2022-05-29': [],
    '2022-05-30': [],
    '2022-05-31': [],
    '2022-06-01': [],
    '2022-06-02': [],
    '2022-06-03': [],
    '2022-06-04': [],
    '2022-06-05': [
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
    '2022-06-06': [],
    '2022-06-07': [],
    '2022-06-08': [],
  }
  return (
    <>
      <View style={styles.pageWrapper}>
        <View style={styles.disciplineTabs}>
          <TouchableHighlight
            style={[
              styles.disciplineTabsTouchable,
              activeTab === 1 ? styles.disciplineTabsTouchableActive : ''
            ]}
            onPress={() => setActiveTab(1)}
            underlayColor="#B88DEE"
          >
            <View style={[
              styles.disciplineTabsButton,
              activeTab === 1 ? styles.disciplineTabsButtonActive : ''
            ]}>
              <Text style={[
                styles.disciplineTabsButtonText,
                activeTab === 1 ? styles.disciplineTabsButtonTextActive : ''
              ]}>
                Português
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.disciplineTabsTouchable,
              styles.disciplineTabsTouchableMath,
              activeTab === 2 ? styles.disciplineTabsTouchableActive : ''
            ]}
            onPress={() => setActiveTab(2)}
            underlayColor="#B88DEE"
          >
            <View style={[
              styles.disciplineTabsButton,
              activeTab === 2 ? styles.disciplineTabsButtonActive : ''
            ]}>
              <Text style={[
                styles.disciplineTabsButtonText,
                activeTab === 2 ? styles.disciplineTabsButtonTextActive : ''
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
    </>
  )
}

export default AgendaScreen;