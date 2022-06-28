import React, { useState } from 'react'
import { ScrollView, View, Text, TextInput, TouchableHighlight, Image } from 'react-native'
import MomentosIcon from '../../assets/icons/MomentosIcon.js'
import HatEducationMiniIcon from '../../assets/icons/HatEducationMiniIcon.js'
import CalendarMiniIcon from '../../assets/icons/CalendarMiniIcon.js'
import CoracaoIcon from '../../assets/icons/CoracaoIcon.js'
import ComentarIcon from '../../assets/icons/ComentarIcon.js'
import UsuariosIcon from '../../assets/icons/UsuariosIcon.js'
import EnviarIcon from '../../assets/icons/EnviarIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import ReportModal from '../../components/modals/report-modal/Modal.js'
import DeleteModal from '../../components/modals/report-modal/Modal.js'

import styles from './styles.js'
import Comments from '../../components/comments/Comments.js'

const MomentosPublicacaoTela = ({ navigation }) => {
  const [showReportModal, setShowReportModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const tabBarHeight = useBottomTabBarHeight();
  const [comment, setComment] = useState('')
  const [liked, setLiked] = useState(false)
  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)

  const reportModal = showReportModal ? <ReportModal bottom close={() => setShowReportModal(false)} /> : null
  const deleteModal = showDeleteModal ? <DeleteModal bottom deleteModal close={() => setShowDeleteModal(false)} /> : null
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  return (
    <>
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
                  Escola são josé
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
              <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }} style={styles.publicationImage} />
              <Text style={styles.publicationDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum consequuntur recusandae doloribus autem ducimus?...
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
                <Text style={styles.publicationCommentsText}>2 comentários</Text>
              </View>

              {/* all comments */}
              <Comments
                name='Rã pequena'
                year='3˚ ano'
                comment='Oi, cara. Como você está neste dia de hoje? A vida é bela que nem um lixão!'
                date='25 de maio'
                owner
                reportModal={() => setShowDeleteModal(true)}
              />
              <Comments
                name='Carambola'
                year='3˚ ano'
                comment='Oi, cara. Como você está neste dia de hoje? A vida é bela que nem um lixão!'
                date='25 de maio'
                reportModal={() => setShowReportModal(true)}
              />

              {/* add comment */}
              <View style={styles.addComments}>
                <Image
                  source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
                  style={styles.addCommentsAvatar}
                />
                <TextInput
                  placeholder='Adicionar comentário'
                  style={styles.addCommentsTextInput}
                  value={comment}
                  onChangeText={value => setComment(value)}
                />
                <TouchableHighlight
                  style={styles.addCommentsSendButton}
                  underlayColor='#fff'
                  onPress={() => 'a'}
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