import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import MuralIcon from '../../assets/icons/MuralIcon.js'
import HatEducationMiniIcon from '../../assets/icons/HatEducationMiniIcon.js'
import CalendarMiniIcon from '../../assets/icons/CalendarMiniIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'

const HomeScreen = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)

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
                  Prof. Kassandra
                </Text>
                <View style={styles.publicationSubtitle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <HatEducationMiniIcon style={styles.publicationSubtitleIcon} />
                    <Text style={styles.publicationSubtitleText}>
                      Geografia
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum consequuntur recusandae doloribus autem ducimus?...
              </Text>

              <TouchableHighlight style={styles.publicationMaterialsTouchable}>
                <View style={styles.publicationMaterialsButton}>
                  <Image 
                    source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }} 
                    style={styles.publicationMaterialsImage} 
                  />
                  <View>
                    <Text style={styles.publicationMaterialsTitle}>
                      Material askdhfkas
                    </Text>
                    <Text style={styles.publicationMaterialsText}>
                      PDF
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>

              <View style={styles.publicationActions}>
                <TouchableHighlight style={styles.publicationActionsButtons}>
                  <View>
                    <Text style={styles.publicationActionsButtonsText}>
                      Curtir
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.publicationActionsButtons}>
                  <View>
                    <Text style={styles.publicationActionsButtonsText}>
                      Comentar
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.publicationActionsButtons}>
                  <View>
                    <Text style={styles.publicationActionsButtonsText}>
                      Marcar como visto
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>

        {missionsModal}
      </View>
    </>
  )
}

export default HomeScreen