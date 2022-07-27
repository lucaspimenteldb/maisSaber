import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import MuralIcon from '../../assets/icons/MuralIcon.js'
import HatEducationMiniIcon from '../../assets/icons/HatEducationMiniIcon.js'
import CalendarMiniIcon from '../../assets/icons/CalendarMiniIcon.js'
import MuralPublicationArrowIcon from '../../assets/icons/MuralPublicationArrowIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service'

const MuralScreen = ({ navigation }) => {
  const [spinner, setSpinner] = useState(false);
  const [posts, setPosts] = useState([]);
  const tabBarHeight = useBottomTabBarHeight();

  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          setSpinner(true)
          await Service.getPostsMural(user.turma[0].id).then(response => setPosts(response.mural))
          setSpinner(false)
        }
  
        begin()

        !posts ? null : begin()
      } catch (error) {
        setSpinner(false);
        console.log(error)
      }
    }, []),
  );

  return (
    <>
      <Spinner
        visible={spinner}
      />
      <LinearGradient 
        style={{ flex: 1, paddingBottom: tabBarHeight }}
        colors={['#3C368C', '#D02F60']}
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

          {/* navigation hub */}
          <View style={[styles.publicationHub, {paddingBottom: tabBarHeight,}]}>
            {/* main hub */}
            {posts?.map(post => (
              <View style={styles.publicationHubContainer} key={post.id}>
                <TouchableHighlight
                  onPress={() => navigation.navigate('MuralPublication', { post })}
                  underlayColor='#fff'
                  style={styles.publicationTouchable}
                >
                  <View style={styles.publicationButton}>
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
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <HatEducationMiniIcon style={styles.publicationSubtitleIcon}/>
                            <Text style={styles.publicationSubtitleText}>
                              {post.disciplina} 
                            </Text>
                          </View>
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CalendarMiniIcon style={styles.publicationSubtitleIcon}/>
                            <Text style={styles.publicationSubtitle}>
                              26 de marc 
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.publicationBody}>
                      <Text style={styles.publicationDescription}>
                        {post.descricao}
                      </Text>
                    </View>
                    <View style={styles.publicationFooter}>
                      <Text style={styles.publicationFooterText}>Ver publicação</Text>
                      <MuralPublicationArrowIcon />
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
            ))}
          </View>
        </ScrollView>

        {missionsModal}
      </LinearGradient>
    </>
  )
}

export default MuralScreen