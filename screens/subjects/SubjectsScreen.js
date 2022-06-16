import React, { useState, useEffect } from 'react'
import { ScrollView, TouchableHighlight, Text, View } from 'react-native'
import GeometriaIcon from '../../assets/icons/GeometriaIcon.js'
import CalculadoraMaoIcon from '../../assets/icons/CalculadoraMaoIcon.js'
import OperacoesIcon from '../../assets/icons/OperacoesIcon.js'
import CoroaJoias32Icon from '../../assets/icons/CoroaJoias32Icon.js'
import CoroaCinza32Icon from '../../assets/icons/CoroaCinza32Icon.js'
import CheckIcon from '../../assets/icons/CheckIcon.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useIsFocused } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay';
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service';
import { useSelector } from 'react-redux'

const VideosScreen = ({ route, navigation }) => {
  const { discipline } = route.params;
  const isFocused = useIsFocused();

  const [spinner, setSpinner] = useState(false);
  const [assuntos, setAssuntos] = useState([]);
  const [count, setCount] = useState(0)

  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const tabBarHeight = useBottomTabBarHeight();
  const isSubjectComplete = (isComplete) => (
    isComplete ?
      <>
        <CoroaJoias32Icon style={styles.subjectCompleteCrown} />
        <CheckIcon style={styles.subjectCompleteCheck} />
      </> :
      <CoroaCinza32Icon style={styles.subjectCompleteCrown} />
  )
  const selectDisciplineStyle = route.params.discipline === 'Math' ?
    styles.disciplineButtonMath :
    styles.disciplineButtonPortuguese;
  const missionsModal = showMissionsModal ? <MissionsModal /> : null;
  const subjects = [
    {
      title: 'Adição e subtração com frações',
      route: 'WatchVideos',
      icon: <CalculadoraMaoIcon />,
      complete: false
    },
    {
      title: 'Figuras geométricas planas',
      route: 'WatchVideos',
      icon: <GeometriaIcon />,
      complete: true
    },
    {
      title: 'Princípio multiplicativo',
      route: 'WatchVideos',
      icon: <OperacoesIcon />,
      complete: false
    },
    {
      title: 'Princípio multiplicativo1',
      route: 'WatchVideos',
      icon: <OperacoesIcon />,
      complete: false
    },
    {
      title: 'Princípio multiplicativo2',
      route: 'WatchVideos',
      icon: <OperacoesIcon />,
      complete: false
    },
    {
      title: 'Princípio multiplicativo3',
      route: 'WatchVideos',
      icon: <OperacoesIcon />,
      complete: false
    },
    {
      title: 'Princípio multiplicativo5',
      route: 'WatchVideos',
      icon: <OperacoesIcon />,
      complete: false
    },
    {
      title: 'Princípio multiplicativo4',
      route: 'WatchVideos',
      icon: <OperacoesIcon />,
      complete: false
    },
    {
      title: 'Princípio multiplicativo6',
      route: 'WatchVideos',
      icon: <OperacoesIcon />,
      complete: false
    },
  ]

  useEffect(() => {
    if (discipline) {
      async function begin () {
        try {
          setSpinner(true);
          await Service.getSubjects(discipline.id).then(api => {
            let videos = api.videos;
            videos ? setAssuntos(videos) : null
            setSpinner(false);

            setCount(count + 1);
          });
        } catch (error) {
          setSpinner(false);
          console.log(error)
        }
      }
      begin();
    }

  }, [isFocused, assuntos, count])
  return (
    <>
      <ScrollView contentContainerStyle={[
        styles.pageWrapper,
        { paddingBottom: tabBarHeight }
      ]}>
        <View style={styles.subjects}>
          {
            assuntos.map((subject, i) => (
              <View style={styles.buttonsWrapper} key={i}>
                <TouchableHighlight
                  underlayColor='#fff'
                  onPress={() => navigation.navigate('WatchVideos', { discipline: route.params.discipline })}
                  style={styles.subjectsTouchable}
                >
                  <View style={[
                    selectDisciplineStyle,
                    styles.disciplineButton]}
                  >
                    {subject.complete ? <View style={styles.progressIndicator} /> : null}
                    {subject.complete ? null : <View style={styles.offsetLayer} />}
                    {/* {subject.icon} */}
                    <CalculadoraMaoIcon />
                  </View>
                </TouchableHighlight>
                <Text style={styles.disciplineButtonLabel}>
                  {subject.titulo}
                </Text>
                {isSubjectComplete(subject.complete)}
              </View>
            ))
          }
        </View>
      </ScrollView>
      {missionsModal}
      <Spinner
        visible={spinner}
      />
    </>
  )
}

export default VideosScreen