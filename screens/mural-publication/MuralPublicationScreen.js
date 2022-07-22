import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TextInput, TouchableHighlight, Image, Alert } from 'react-native'
import MuralIcon from '../../assets/icons/MuralIcon.js'
import HatEducationMiniIcon from '../../assets/icons/HatEducationMiniIcon.js'
import CalendarMiniIcon from '../../assets/icons/CalendarMiniIcon.js'
import DownloadIcon from '../../assets/icons/DownloadIcon.js'
import CoracaoIcon from '../../assets/icons/CoracaoIcon.js'
import ComentarIcon from '../../assets/icons/ComentarIcon.js'
import UsuariosIcon from '../../assets/icons/UsuariosIcon.js'
import EnviarIcon from '../../assets/icons/EnviarIcon.js'
import CheckIcon from '../../assets/icons/CheckMiniIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay'
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment'
import 'moment/locale/pt-br'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import ReportModal from '../../components/modals/report-modal/Modal.js'
import Comments from '../../components/comments/Comments.js'

import styles from './styles.js'
import Service from './services/service'

const MuralPublicationScreen = ({ route, navigation }) => {
  const { post } = route.params;
  const [spinner, setSpinner] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const tabBarHeight = useBottomTabBarHeight();
  const [comment, setComment] = useState([])
  const [addComment, setAddComment] = useState('')
  const [read, setRead] = useState(false)
  const [liked, setLiked] = useState(false)
  const [totalLike, setTotalLike] = useState(Number(post.curtidas))
  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)
  const userLogger = user.user;

  const isFocused = useIsFocused();
  
  const reportModal = showReportModal ? <ReportModal bottom close={() => setShowReportModal(false)} /> : null
  const deleteModal = showDeleteModal ? <ReportModal bottom deleteModal close={() => setShowDeleteModal(false)} /> : null
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  const handleLike = async () => {
    let newLike = totalLike + 1;
    const response = await Service.curtir(post.id,userLogger.id, newLike)
    liked ? null : setTotalLike(response.curtidas)
    console.log(response)

    setLiked(oldValue => !oldValue)
  }

  const handleComment = async () => {
    try {
      await Service.comentar(post.id, userLogger.nome, addComment, user.turma[0].descricao);
      const comments = await Service.buscarComentarios(post.id)
      setComment(comments.comentarios)
      setAddComment('')
    } catch (err) {
      Alert.alert('Aviso!', 'Ocorreu um erro ao comentar na publicação.')
      console.log(err)
    }
  }

  const handleCheckPost = async () => {
    try {
      const response = await Service.visualizar(post.id, userLogger.id)
      if (response.success) {
        Alert.alert('Visto com sucesso!', 'Obrigado pelo feedback!') 
        setRead(true)
      } else {
        Alert.alert('Aviso!', 'Publicação já foi vista.')
        setRead(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          setSpinner(true)
          const response = await Service.buscarComentarios(post.id)
          setComment(response.comentarios)

          const getAcao = await Service.getAcoes(post.id, userLogger.id)
          const { visto, curtido } = getAcao;

          visto ? setRead(true) : null;
          curtido ? setLiked(true) : null;

          setSpinner(false)
        }
    
        begin();
      } catch (error) {
        setSpinner(false);
        console.log(error)
      }
    }, [isFocused, liked])
  );

  return (
    <>
      <Spinner
        visible={spinner}
      />
      <LinearGradient 
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#E53952', '#EE4949', '#E17C1E']}
        start={{x: 0, y: 0}} end={{x: 1.2, y: 0}}
      >
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <MuralIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Mural</Text>
              <Text style={styles.headerText}>Todas as publicações dos seus professores</Text>
            </View>
          </View>

          <View style={[styles.publicationHub, {paddingBottom: tabBarHeight}]}>
            {/* main hub */}
            <View style={styles.publicationHeader}>
              <Image
                source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
                style={styles.publicationAvatar}
              />
              <View>
                <Text style={styles.publicationOwner}>
                  {post.professor}
                </Text>
                <View style={styles.publicationSubtitle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <HatEducationMiniIcon style={styles.publicationSubtitleIcon} />
                    <Text style={styles.publicationSubtitleText}>
                      {post.disciplina}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CalendarMiniIcon style={styles.publicationSubtitleIcon} />
                    <Text style={styles.publicationSubtitle}>
                      26 de marc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.publicationBody}>
              <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }} style={styles.publicationImage} />
              <Text style={styles.publicationDescription}>
                {post.descricao}
              </Text>

              {/* materials */}
              {post.anexo ?
                <TouchableHighlight
                  underlayColor='#fff'
                  style={styles.publicationMaterialsTouchable}
                >
                  <View style={styles.publicationMaterialsButton}>
                    <Image
                      source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
                      style={styles.publicationMaterialsImage}
                    />
                    <View>
                      <Text style={styles.publicationMaterialsTitle}>
                        {post.anexo}
                      </Text>
                      <Text style={styles.publicationMaterialsText}>
                        PDF
                      </Text>
                      <DownloadIcon style={styles.publicationMaterialDownload} />
                    </View>
                  </View>
                </TouchableHighlight> : null
              }

              {/* actions like, comment and mark as red */}
              <View style={styles.publicationActions}>
                <TouchableHighlight 
                  underlayColor='#fff' 
                  style={styles.publicationActionsButtons}
                  onPress={handleLike}
                >
                  <View style={styles.publicationActionsButtonsIcon}>
                    <CoracaoIcon 
                      fill={ liked ? '#FB3542' : null } 
                      color={liked ? '#FB3542' : null }
                    />
                    <Text style={styles.publicationActionsButtonsText}>
                      {totalLike}
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight 
                  underlayColor='#fff' 
                  style={styles.publicationActionsButtons}
                  onPress={() => 'as'}
                >
                  <View style={styles.publicationActionsButtonsIcon}>
                    <ComentarIcon />
                    <Text style={styles.publicationActionsButtonsText}>
                      Comentar
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={handleCheckPost}
                  underlayColor='#fff'
                  style={[
                    styles.publicationActionsButtons,
                    styles.publicationActionsButtonsOutlined,
                    read ? styles.publicationActionsButtonsRead : null
                  ]}
                >
                  <View style={read ? styles.readText : null}>
                    <Text style={[
                      styles.publicationActionsButtonsText,
                      styles.publicationActionsButtonsTextPurple,
                      read ? styles.publicationActionsButtonsTextGreen : null
                    ]}
                    >
                     { read ? 'Visto' : 'Marcar como visto' }
                    </Text>
                    { read ? <CheckIcon color='#307E00'/> : null }
                  </View>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.publicationComments}>
              <View style={styles.horizontalLine}></View>
              <View style={styles.publicationCommentsTitle}>
                <UsuariosIcon />
                <Text style={styles.publicationCommentsText}>2 comentários para a turma</Text>
              </View>

              {/* all comments */}
              {comment?.map(comentario => (
                <Comments
                  key={comentario.id} 
                  name={comentario.nome}
                  year={comentario.turma}
                  comment={comentario.comentario}
                  date={moment(comentario.created_at).locale('pt-br').format('ll')}
                  owner
                />
              ))}

              {/* add comment */}
              <View style={styles.addComments}>
                <Image
                  source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
                  style={styles.addCommentsAvatar}
                />
                <TextInput 
                  placeholder='Adicionar comentário'
                  style={styles.addCommentsTextInput}
                  value={addComment}
                  onChangeText={value => setAddComment(value)}
                />
                <TouchableHighlight
                  style={styles.addCommentsSendButton}
                  underlayColor='#fff'
                  onPress={handleComment}
                >
                  <EnviarIcon />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>

        {missionsModal}
        {reportModal}
        {deleteModal}
      </LinearGradient>
    </>
  )
}

export default MuralPublicationScreen