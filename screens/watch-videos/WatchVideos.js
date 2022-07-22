import React, { useState } from 'react'
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
import YoutubePlayer from "react-native-youtube-iframe";

const VideosScreen = ({ route, navigation }) => {
  const { subject, discipline } = route.params;
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const tabBarHeight = useBottomTabBarHeight();
  const dispatch = useDispatch();
  const {showFeedbackModal} = useSelector(state => state.showFeedbackModalReducer);
  const {showGainPointsModal} = useSelector(state => state.showGainPointsModalReducer);
  const { user } = useSelector(state => state.userReducer)
  const userLogger = user.user;

  const windowWidth = Dimensions.get('window').width;
  const widthButtonsPrimary = 160;

  const [questionDescription, setQuestionDescription] = useState('')
  const [ra, setRa] = useState('')
  const [rb, setRb] = useState('')
  const [rc, setRc] = useState('')
  const [rd, setRd] = useState('')
  const [rgabarito, setRgabarito] = useState('')
  const [selectedAlternative, setSelectedAlternative] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [finished, setFinished] = useState(false);

  const [fontSize, setFontSize] = useState(16);
  const whiteColor = '#fff';
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
  const [playing, setPlaying] = useState(false);

  const actionButtonsPrimary = (
    <>
      <TouchableHighlight underlayColor="#fff" onPress={() => console.log('teste')}>
        <View style={styles.modalActionButton}>
          <AnteriorIcon />
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="#fff" onPress={() => console.log('teste')}>
        <View style={styles.modalActionButton}>
          <ProximoIcon />
        </View>
      </TouchableHighlight>
    </>
  )
  const actionButtonsSecondary = (
    <>
      <TouchableHighlight
        underlayColor="#fff"
        onPress={() => handleFinishVideo('testes')}
        style={[styles.buttonAnswerTouchable, { width: widthButtonsPrimary }]}
      >
        <View style={finished ? styles.buttonAnswerRequest : styles.buttonAnswer}>
          <Text style={[styles.alternativeText, { color: finished ? '#7F3FCF' : '#fff' }]}>{finished ? 'Vídeo finalizado' : 'Finalizar vídeo'}</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="#fff"
        onPress={() => console.log('teste')}
        style={[styles.buttonAnswerTouchable, { width: widthButtonsPrimary }]}
      >
        <View style={styles.buttonAnswer}>
          <Text style={[styles.alternativeText, { color: '#fff' }]}>Curtir</Text>
          <LikeIcon />
        </View>
      </TouchableHighlight>
    </>
  )

  const handleFinishVideo = async (obj) => {
    try {
      const response = await Service.finishVideoaula(userLogger.id, subject.id)
      if (response.success) {
        Alert.alert('Concluído!', 'Aula finalizada com sucesso.');
        setFinished(true);
      } else {
        setFinished(true);
        Alert.alert('Aula já finalizada!', 'Esta aula já foi finalizada.')
      }
    } catch (error) {
      Alert.alert('Aviso!', 'Não foi possível finalizar a aula.')
      console.log(error.message)
    }
  }
  
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
          questoes?.map(item => {
            setQuestionDescription(item.descricao)
            setRa(item.ra)
            setRb(item.rb)
            setRc(item.rc)
            setRd(item.rd)
            setRgabarito(item.rgabarito)
          })

          const videoData = await Service.getDataVideo(userLogger.id, subject.id);
          const { dados } = videoData;
          dados?.map(item => {
            item.situacao === 'finalizado' ? setFinished(true) : setFinished(false)
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

  console.log(subject)

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

          <View style={{elevation: 100, zIndex: 100, position: 'relative', alignItems: 'center'}}>
            <YoutubePlayer
              play={playing}
              height={230}
              width={"97%"}
              videoId={subject.url.slice(32, 43)}
            />
          </View>

          <View style={styles.pageInformation}>
            <Text style={styles.pageTitle}>
              {subject.titulo}
            </Text>
            <Text style={styles.pageDescription}>
              {subject.descricao}
            </Text>

            <View style={styles.likeAndFinishArea}>
              {actionButtonsSecondary}
            </View>
            <View style={styles.pageActionsButtons}>
              {actionButtonsPrimary}
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
              style={[styles.buttonAnswerTouchable, { width: '90%' }]}
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