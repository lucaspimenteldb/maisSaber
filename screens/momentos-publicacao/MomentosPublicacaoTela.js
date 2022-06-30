import React, { useState } from 'react'
import { ScrollView, View, Text, TextInput, TouchableHighlight, Image, Alert } from 'react-native'
import MomentosIcon from '../../assets/icons/MomentosIcon.js'
import HatEducationMiniIcon from '../../assets/icons/HatEducationMiniIcon.js'
import CalendarMiniIcon from '../../assets/icons/CalendarMiniIcon.js'
import CoracaoIcon from '../../assets/icons/CoracaoIcon.js'
import ComentarIcon from '../../assets/icons/ComentarIcon.js'
import UsuariosIcon from '../../assets/icons/UsuariosIcon.js'
import EnviarIcon from '../../assets/icons/EnviarIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay'
import moment from 'moment'
import 'moment/locale/pt-br'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import ReportModal from '../../components/modals/report-modal/Modal.js'
import DeleteModal from '../../components/modals/report-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service'
import Comments from '../../components/comments/Comments.js'

const MomentosPublicacaoTela = ({ navigation, route }) => {
  const { photo, schoolName } = route.params; 
  const [showReportModal, setShowReportModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const tabBarHeight = useBottomTabBarHeight();
  const [comment, setComment] = useState('')
  const [liked, setLiked] = useState(false)
  const [spinner, setSpinner] = useState(false);
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState('');
  const [addComment, setAddComment] = useState('')

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)
  const userLogger = user.user;

  const reportModal = showReportModal ? <ReportModal bottom close={() => setShowReportModal(false)} /> : null
  const deleteModal = showDeleteModal ? <DeleteModal bottom deleteModal close={() => setShowDeleteModal(false)} /> : null
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  const handleComment = async () => {
    try {
      await Service.comentar(photo.id, userLogger.nome, addComment, user.turma[0].descricao);
      const response = await Service.getComentarios(photo.id);
      setComments(response.comentarios)
      setTotalComments(response.comentarios.length)
      setAddComment('')
    } catch (err) {
      Alert.alert('Aviso!', 'Ocorreu um erro ao comentar na publicação.')
      console.log(err)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          setSpinner(true);

          const response = await Service.getComentarios(photo.id);
          setComments(response.comentarios)
          setTotalComments(response.comentarios.length)

          setSpinner(false);
        }
    
        begin();
      } catch (error) {
        setSpinner(false);
        console.log(error)
      }
    }, [])
  );

  return (
    <>
      <Spinner
        visible={spinner}
      />
      <View style={{ flex: 1, backgroundColor: '#4B089F' }}>
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <MomentosIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Momentos</Text>
              <Text style={styles.headerText}>Todas as publicações dos seus professores</Text>
            </View>
          </View>

          <View style={[styles.publicationHub, { paddingBottom: tabBarHeight }]}>
            {/* main hub */}
            <View style={styles.publicationHeader}>
              <Image
                source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
                style={styles.publicationAvatar}
              />
              <View>
                <Text style={styles.publicationOwner}>
                  {schoolName}
                </Text>
                <View style={styles.publicationSubtitle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.publicationSubtitle}>
                      26 de marc
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.publicationBody}>
              <Image source={{ uri: photo.image_momento }} style={styles.publicationImage} />
              <Text style={styles.publicationDescription}>
                {photo.descricao}
              </Text>

              {/* actions like, comment and mark as red */}
              <View style={styles.publicationActions}>
                <TouchableHighlight
                  underlayColor='#fff'
                  style={styles.publicationActionsButtons}
                  onPress={() => setLiked(oldValue => !oldValue)}
                >
                  <View style={styles.publicationActionsButtonsIcon}>
                    <CoracaoIcon
                      fill={liked ? '#4B089F' : null}
                      color={liked ? '#4B089F' : null}
                    />
                    <Text style={styles.publicationActionsButtonsText}>
                      Curtir
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
              </View>
            </View>

            <View style={styles.publicationComments}>
              <View style={styles.horizontalLine}></View>
              <View style={styles.publicationCommentsTitle}>
                <UsuariosIcon />
                <Text style={styles.publicationCommentsText}>{totalComments} comentários</Text>
              </View>

              {/* all comments */}
              {comments?.map(comentario => (
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
      </View>
    </>
  )
}

export default MomentosPublicacaoTela