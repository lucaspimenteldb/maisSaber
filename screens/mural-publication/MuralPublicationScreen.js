import React, { useState } from 'react'
import { ScrollView, View, Text, TextInput, TouchableHighlight, Image } from 'react-native'
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
import MissionsModal from '../../components/modals/missions-modal/Modal.js'
import ReportModal from '../../components/modals/report-modal/Modal.js'

import styles from './styles.js'
import Comments from '../../components/comments/Comments.js'

const MuralPublicationScreen = ({ route, navigation }) => {
  const { post } = route.params;
  const [showReportModal, setShowReportModal] = useState(false)
  const tabBarHeight = useBottomTabBarHeight();
  const [comment, setComment] = useState('')
  const [read, setRead] = useState(false)
  const [liked, setLiked] = useState(false)
  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  
  const reportModal = showReportModal ? <ReportModal bottom close={() => setShowReportModal(false)} /> : null
  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  return (
    <>
      <View style={{ flex: 1, paddingBottom: tabBarHeight, backgroundColor: '#4B089F' }}>
        <ScrollView contentContainerStyle={styles.pageWrapper}>
          <View style={styles.header}>
            <MuralIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Mural</Text>
              <Text style={styles.headerText}>Todas as publicações dos seus professores</Text>
            </View>
          </View>

          <View style={styles.publicationHub}>
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
                  onPress={() => setLiked(oldValue => !oldValue)}
                >
                  <View style={styles.publicationActionsButtonsIcon}>
                    <CoracaoIcon 
                      fill={ liked ? '#4B089F' : null } 
                      color={liked ? '#4B089F' : null }
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
                <TouchableHighlight
                  onPress={() => setRead(true)}
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
              <Comments 
                name='Rã pequena' 
                year='3˚ ano' 
                comment='Oi, cara. Como você está neste dia de hoje? A vida é bela que nem um lixão!' 
                date='25 de maio'
                owner
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
      </View>
    </>
  )
}

export default MuralPublicationScreen