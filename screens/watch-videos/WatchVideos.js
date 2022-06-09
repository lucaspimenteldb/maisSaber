import React from 'react'
import { ScrollView, TouchableHighlight, Text, View, Image, Dimensions } from 'react-native'
import FeedbackModal from '../../components/modals/feedback-modal/Modal.js'
import GainPointsModal from '../../components/modals/gain-points-modal/Modal.js'
import CalculadoraMaoIcon from '../../assets/icons/CalculadoraMaoIcon.js'
import OperacoesIcon from '../../assets/icons/OperacoesIcon.js'
import CoroaJoias32Icon from '../../assets/icons/CoroaJoias32Icon.js'
import CoroaCinza32Icon from '../../assets/icons/CoroaCinza32Icon.js'
import CheckIcon from '../../assets/icons/CheckIcon.js'
import StarOutlineIcon from '../../assets/icons/StarOutlineIcon.js'
import LikeIcon from '../../assets/icons/LikeIcon.js'
import ProximoIcon from '../../assets/icons/ProximoIcon.js'
import AnteriorIcon from '../../assets/icons/AnteriorIcon.js'
import PlayIcon from '../../assets/icons/PlayIcon.js'

import styles from './styles.js'

import { useDispatch, useSelector } from 'react-redux'
import { setShowFeedbackModal, setShowGainPointsModal } from '../../redux/actions.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const VideosScreen = ({ route, navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const dispatch = useDispatch();
  const {showFeedbackModal} = useSelector(state => state.showFeedbackModalReducer);
  const {showGainPointsModal} = useSelector(state => state.showGainPointsModalReducer);

  const windowWidth = Dimensions.get('window').width;

  const actionButtons = (
    <>
    <TouchableHighlight underlayColor="#fff" onPress={() => 'oi'}>
      <View style={styles.modalActionButton}>
        <LikeIcon />
      </View>
    </TouchableHighlight>
    <TouchableHighlight underlayColor="#fff" onPress={() => 'oi'}>
      <View style={styles.modalActionButton}>
        <AnteriorIcon />
      </View>
    </TouchableHighlight>
    <TouchableHighlight underlayColor="#fff" onPress={() => 'oi'}>
      <View style={styles.modalActionButton}>
        <ProximoIcon />
      </View>
    </TouchableHighlight>
    </>
  )
  const isSubjectComplete = (isComplete) => (
    isComplete ? 
      <>
        <CoroaJoias32Icon style={styles.subjectCompleteCrown}/>
        <CheckIcon style={styles.subjectCompleteCheck}/>
      </> :
      <CoroaCinza32Icon style={styles.subjectCompleteCrown}/>
  )
  const selectDisciplineStyle = route.params.discipline === 'Math' ?
    styles.disciplineButtonMath :
    styles.disciplineButtonPortuguese;
  const subjects = [
    {
      title: 'Adição e subtração com frações',
      route: 'noi',
      icon: <CalculadoraMaoIcon />,
      complete: false
    },
    {
      title: 'Princípio multiplicativo',
      route: 'noi',
      icon: <OperacoesIcon />,
      complete: false
    },
  ]
  return (
    <>
      <View style={{flex: 1, paddingBottom: tabBarHeight, backgroundColor: '#fff'}}>
        <ScrollView contentContainerStyle={[styles.pageWrapper]}>
          <View style={styles.headerButtons}>
            <TouchableHighlight
              underlayColor='#fff'
              onPress={() => navigation.goBack()}
              style={styles.backButtonWrapper}
            >
              <View style={styles.backButton}>
                <Text style={styles.backButtonText}>Voltar</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              underlayColor="#300567" 
              onPress={() => dispatch(setShowFeedbackModal(true))}
            >
              <View style={styles.modalActionButtonSecondary}>
                <StarOutlineIcon />
              </View>
            </TouchableHighlight>
          </View>

          <View style={{elevation: 100, zIndex: 100, position: 'relative'}}>
            <Image 
              style={{margin: 16, width: windowWidth - 32, height: 250, borderRadius: 10, }} 
              source={{uri: 'https://learnenglish.britishcouncil.org/sites/podcasts/files/RS8096_GettyImages-170036776-hig.jpg'}} 
            />
            <TouchableHighlight 
              underlayColor="#fff"
              onPress={() => dispatch(setShowGainPointsModal(true))}
            >
              <View style={[styles.playButton, {left: windowWidth/2 - 30}]}>
                <PlayIcon />
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.pageInformation}>
            <Text style={styles.pageTitle}>
              Adição e subtração com frações
            </Text>
            <Text style={styles.pageDescription}>
              A adição pode ser entendida como a soma de um Numero positivo com outro numero.
            </Text>

            <View style={styles.pageActionsButtons}>
              {actionButtons}
            </View>

            <Text style={styles.pageTitle}>
              Assista também:
            </Text>
            <View style={styles.subjects}>
              {
                subjects.map(subject => (
                  <View style={styles.buttonsWrapper} key={subject.title}>
                    <TouchableHighlight
                      underlayColor='#fff'
                      onPress={() => navigation.navigate(subject.route)}
                      style={styles.subjectsTouchable}
                      >
                      <View style={[
                        selectDisciplineStyle,
                        styles.disciplineButton]}
                      >
                        {subject.complete ? <View style={styles.progressIndicator}/> : null}
                        {subject.complete ? null : <View style={styles.offsetLayer} />}
                        {subject.icon}
                      </View>
                    </TouchableHighlight>
                    <Text style={styles.disciplineButtonLabel}>
                      {subject.title}
                    </Text>
                    {isSubjectComplete(subject.complete)}
                  </View>
                ))
              }
            </View>
          </View>
        </ScrollView>

        { showGainPointsModal ? <GainPointsModal points={23}/> : null }
      </View>
      { showFeedbackModal ? <FeedbackModal bottom/> : null }
    </>
  )
}

export default VideosScreen