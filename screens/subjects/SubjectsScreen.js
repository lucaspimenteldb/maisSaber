import React, { useState, useEffect } from 'react'
import { ScrollView, TouchableHighlight, Text, View, ActivityIndicator } from 'react-native'
import GeometriaIcon from '../../assets/icons/GeometriaIcon.js'
import CalculadoraMaoIcon from '../../assets/icons/CalculadoraMaoIcon.js'
import OperacoesIcon from '../../assets/icons/OperacoesIcon.js'
import CoroaJoias32Icon from '../../assets/icons/CoroaJoias32Icon.js'
import CoroaCinza32Icon from '../../assets/icons/CoroaCinza32Icon.js'
import CheckIcon from '../../assets/icons/CheckIcon.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay';
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service';
import { useSelector } from 'react-redux'

const VideosScreen = ({ route, navigation }) => {
  const { discipline } = route.params;

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

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          setSpinner(true);
          const response = await Service.getSubjects(discipline.id);
          setAssuntos(response.videos);
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
      <ScrollView contentContainerStyle={[
        styles.pageWrapper,
        { paddingBottom: tabBarHeight }
      ]}>
        <Spinner
          visible={spinner}
        />
        <View style={styles.subjects}>
          {
            assuntos?.map((subject, i) => (
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
        {missionsModal}
      </ScrollView>
  )
}

export default VideosScreen