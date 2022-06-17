import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableHighlight, Text, View, Image, Dimensions, Alert } from 'react-native'
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
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service'

import { useDispatch, useSelector } from 'react-redux'
import { setShowFeedbackModal, setShowGainPointsModal } from '../../redux/actions.js'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useFocusEffect } from "@react-navigation/native"
import RenderHtml from 'react-native-render-html';
import Spinner from 'react-native-loading-spinner-overlay';

const VideosScreen = ({ route, navigation }) => {
  const { discipline } = route.params;
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const tabBarHeight = useBottomTabBarHeight();
  const dispatch = useDispatch();
  const {showFeedbackModal} = useSelector(state => state.showFeedbackModalReducer);
  const {showGainPointsModal} = useSelector(state => state.showGainPointsModalReducer);

  const windowWidth = Dimensions.get('window').width;

  const [questionDescription, setQuestionDescription] = useState('')
  const [ra, setRa] = useState('')
  const [rb, setRb] = useState('')
  const [rc, setRc] = useState('')
  const [rd, setRd] = useState('')
  const [rgabarito, setRgabarito] = useState('')
  const [selectedAlternative, setSelectedAlternative] = useState('');
  const [spinner, setSpinner] = useState(false);

  const [fontSize, setFontSize] = useState(16);
  const classStyle  = {
    'descricao-questao':{
      fontSize,
      padding: 12,
      margin: 0,
      fontFamily: 'Nunito-Bold',
    },
    'alternativa-questao': { 
      fontSize,
      margin: 0,
      fontFamily: 'Nunito-Bold',
      flexDirection: 'row',
    }
  };
  const tagStyle = {img:{
    maxWidth: '100',
    },
    span:{
      fontSize,
      margin:0,
      padding: 0,
      fontFamily: 'Nunito-Bold',
    },
    p:{
      padding: 0,
      fontSize,
      fontFamily: 'Nunito-Bold',
      margin:0,
      marginLeft: 5,
    }
  };
  const ignoreTags = ['font', 'v:shape', 'o:p'];
  const ignoreClass = ['MsoNormal'];
  const ignoreStyles = ['fontSize', 'fontFamily', 'margin', 'marginTop', 'marginBottom', 'textAlign', 'maxWidth',
    'width', 'padding', 'marginRight', 'marginLeft'];

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
  const missionsModal = showMissionsModal ? <MissionsModal /> : null;
  const feedbackModal = showFeedbackModal ? <FeedbackModal bottom/> : null;
  const gainPointsModal = showGainPointsModal ? <GainPointsModal points={23}/> : null;

  const handleAnswerQuestion = () => {
    selectedAlternative === rgabarito ? Alert.alert('Você acertou!', 'Continue dessa forma que cada vez mais você evolue!') : Alert.alert('Oops!', 'Mas não desista, tente novemtente.')
  }

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          setSpinner(true)
          const response = await Service.getQuestion(discipline.id)
          const { questoes } = response;
          console.log(discipline)
          questoes.map(item => {
            setQuestionDescription(item.descricao)
            setRa(item.ra)
            setRb(item.rb)
            setRc(item.rc)
            setRd(item.rd)
            setRgabarito(item.rgabarito)
          })
          setSpinner(false)
        }
  
        begin()
      } catch (error) {
        setSpinner(false);
        console.log(error)
      }
    }, []),
  );

  // useEffect(() => {
  //   async function begin() {
  //     try {
  //       setSpinner(true)
  //       await Service.getQuestion(discipline.id)
  //         .then(response => {
  //           const { questoes } = response;
  //           questoes.map(item => {
  //             setQuestionDescription(item.descricao)
  //             setRa(item.ra)
  //             setRb(item.rb)
  //             setRc(item.rc)
  //             setRd(item.rd)
  //             setRgabarito(item.rgabarito)
  //           })
  //         })
  //       setSpinner(false)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }

  //   begin()
  // }, [])
  return (
    <>
      <Spinner
        visible={spinner}
      />
      <View style={{flex: 1, paddingBottom: tabBarHeight, backgroundColor: '#fff'}}>
        <ScrollView contentContainerStyle={[styles.pageWrapper]}>
          <View style={styles.headerButtons}>
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
              {discipline.titulo || discipline?.nome}
            </Text>
            <Text style={styles.pageDescription}>
              {discipline.descricao || discipline?.slug}
            </Text>

            <View style={styles.pageActionsButtons}>
              {actionButtons}
            </View>

            
            <Text style={styles.pageTitle}>Questão</Text>
            <RenderHtml
              contentWidth={300}
              classesStyles={classStyle}
              tagsStyles={tagStyle}
              ignoredDomTags={ignoreTags}
              ignoredStyles={ignoreStyles}
              source={{
                  html: `<span style="padding-right: 7px" class="descricao-questao">${questionDescription}</span>`,
              }}
            />

            {/* ALTERNATIVAS */}
            <TouchableHighlight
              underlayColor="#8D8D8DCC"
              onPress={() => setSelectedAlternative('A')}
              style={[styles.alternativesButton, selectedAlternative === 'A' ? styles.selectedAlternativesButton : '']}
            >
              <RenderHtml
                contentWidth={300}
                classesStyles={classStyle}
                tagsStyles={tagStyle}
                ignoredDomTags={ignoreTags}
                ignoredStyles={ignoreStyles}
                source={{
                    html: `<span style="padding-right: 7px" class="alternativa-questao">A - ${ra}</span>`,
                }}
              />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#8D8D8DCC"
              onPress={() => setSelectedAlternative('B')}
              style={[styles.alternativesButton, selectedAlternative === 'B' ? styles.selectedAlternativesButton : '']}
            >
              <RenderHtml
                contentWidth={300}
                classesStyles={classStyle}
                tagsStyles={tagStyle}
                ignoredDomTags={ignoreTags}
                ignoredStyles={ignoreStyles}
                source={{
                    html: `<span style="padding-right: 7px" class="alternativa-questao">B - ${rb}</span>`,
                }}
              />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#8D8D8DCC"
              onPress={() => setSelectedAlternative('C')}
              style={[styles.alternativesButton, selectedAlternative === 'C' ? styles.selectedAlternativesButton : '']}
            >
              <RenderHtml
                contentWidth={300}
                classesStyles={classStyle}
                tagsStyles={tagStyle}
                ignoredDomTags={ignoreTags}
                ignoredStyles={ignoreStyles}
                source={{
                    html: `<span style="padding-right: 7px" class="alternativa-questao">C - ${rc}</span>`,
                }}
              />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#8D8D8DCC"
              onPress={() => setSelectedAlternative('D')}
              style={[styles.alternativesButton, selectedAlternative === 'D' ? styles.selectedAlternativesButton : '']}
            >
              <RenderHtml
                contentWidth={300}
                classesStyles={classStyle}
                tagsStyles={tagStyle}
                ignoredDomTags={ignoreTags}
                ignoredStyles={ignoreStyles}
                source={{
                    html: `<span style="padding-right: 7px" class="alternativa-questao">D - ${rd}</span>`,
                }}
              />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#fff"
              onPress={handleAnswerQuestion}
              style={styles.buttonAnswerTouchable}
            >
              <View style={styles.buttonAnswer}>
                <Text style={styles.buttonAnswerText}>
                  Responder
                  </Text>
              </View>
            </TouchableHighlight>
            {/* ALTERNATIVAS */}

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

        { gainPointsModal }
      </View>
      { feedbackModal }
      { missionsModal }
    </>
  )
}

export default VideosScreen