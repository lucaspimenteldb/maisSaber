import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, useWindowDimensions } from 'react-native'
import CalendarioIcon from '../../assets/icons/CalendarioOutlineIcon'

import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'
import Service from './services/service'
import moment from 'moment'

import MonthCalendar from '../../components/calendar/MonthCalendar/MonthCalendar'
import WeekCalendar from '../../components/calendar/WeekCalendar/WeekCalendar'
import Reminder from '../../components/calendar/reminders/Reminder'

const Calendario = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [reminders, setReminders] = useState([]);

  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Mensal' },
    { key: 'second', title: 'Semanal' },
  ]);

  const FirstRoute = () => (
    <ScrollView style={styles.tabArea}>
      <MonthCalendar />
      <Text style={styles.titleDayReminder}>Hoje</Text>
      {reminders.length ? reminders.map(reminder => (
        <Reminder 
          key={reminder.id}
          type={reminder.tipo}
          description={reminder.descricao}
          title={reminder.titulo}
          time={reminder.data_lembrete}
        />
      )) : null}

    </ScrollView>
  );
  
  const SecondRoute = () => (
    <ScrollView style={styles.tabArea}>
      <WeekCalendar />
      <Text style={styles.titleDayReminder}>Hoje</Text>
      {reminders.length ? reminders.map(reminder => (
        <Reminder 
          key={reminder.id}
          type={reminder.tipo}
          description={reminder.descricao}
          title={reminder.titulo}
          time={String(reminder.data_lembrete).substr(11, 5)}
        />
      )) : null}

    </ScrollView>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          setSpinner(true)
          
          const data = new Date();
          let dataFormat = moment(data).format('YYYY-MM-DD') + ' 00:00:00';

          const response = await Service.getRemindersNow(dataFormat)

          setReminders(response.agenda)
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
      <LinearGradient 
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#3C368C', '#D02F60']}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <CalendarioIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Agenda</Text>
              <Text style={styles.headerText}>Lorem ipsum dolor sit amet, consectetur.</Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.publicationHub]}>
            <TabView
              renderTabBar={props =>
                <TabBar
                  {...props} 
                  style={styles.tabBar}
                  activeColor="#3A0083"
                  labelStyle={styles.tabBarLabel}
                  inactiveColor={"gray"}
                  indicatorStyle={styles.tabBarIndicator}
                />
              }
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: layout.width }}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  )
}

export default Calendario