import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import MomentosIcon from '../../assets/icons/MomentosIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from "@react-navigation/native"
import Spinner from 'react-native-loading-spinner-overlay'
import LinearGradient from 'react-native-linear-gradient'

import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'
import Service from './services/service'

const MomentosTela = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [width, setWidth] = useState(0)
  const [layout, setLayout] = useState(0)
  const findWidth = e => {
    if (layout > 0) return
    
    setWidth(e.nativeEvent.layout.width)
    setLayout(1)
  }
  const dispatch = useDispatch()
  const { showMissionsModal } = useSelector(state => state.showMissionsModalReducer)
  const { user } = useSelector(state => state.userReducer)
  const userLogger = user.user;
  const filters = [
    {
      title: 'Alunos',
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png'
    },
    {
      title: 'Profe.',
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png'
    },
    {
      title: 'Aulas',
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png'
    },
    {
      title: 'Projetos',
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png'
    },
    {
      title: 'Atividades',
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png'
    },
  ]
  const [spinner, setSpinner] = useState(false);

  const [schoolName, setSchoolName] = useState('');
  const [totalAlunos, setTotalAlunos] = useState('');
  const [totalTeachers, setTotalTeachers] = useState('');
  const [moments, setMoments] = useState([]);
  
  const renderFilters = filters.map(filter => (
    <TouchableHighlight onPress={() => 'a'} underlayColor="#fff" key={filter.title}>
      <View style={styles.filterWrapper}>
        <Image
          source={{ uri: filter.image }}
          style={styles.filterImage}
        />
        <Text style={styles.filterText}>{filter.title}</Text>
      </View>
    </TouchableHighlight>
  ))
  const renderPhotos = moments.map((photo) => (
    <TouchableHighlight 
      onPress={() => navigation.navigate('MomentosPublicacao', {photo, schoolName})}
      underlayColor="#fff"
      style={[styles.photoWrapper, {height: width}]}
      onLayout={findWidth}
      key={photo.id}
    >
      <Image
        source={{ uri: photo.image_momento }}
        style={styles.photo}
      />
    </TouchableHighlight>
  ))

  const missionsModal = showMissionsModal ? <MissionsModal /> : null

  useFocusEffect(
    React.useCallback(() => {
      try {
        async function begin() {
          setSpinner(true);

          const response = await Service.getEscolaMomento(user.escola[0].id);
          const { momentos } = response;
          setSchoolName(momentos.escola[0].nome);
          setTotalAlunos(momentos.total_alunos);
          setTotalTeachers(momentos.total_professores);
          setMoments(momentos.momentos);

          setSpinner(false);
        }
    
        begin();
      } catch (error) {
        setSpinner(false);
        console.log(error)
      }
    }, [])
  );

  console.log(user.escola)

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
            <MomentosIcon />

            <View style={styles.headerInfo}>
              <Text style={styles.headerTitle}>Momentos</Text>
              <Text style={styles.headerText}>Todas as publicações dos seus professores</Text>
            </View>
          </View>

          {/* navigation hub */}
          <View style={[styles.momentsHub, { paddingBottom: tabBarHeight, }]}>
            {/* main hub */}
            <View style={styles.momentsHubContainer}>
              <View style={styles.momentsHeader}>
                <Image
                  source={{ uri: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
                  style={styles.momentsAvatar}
                />
                <View>
                  <Text style={styles.momentsSchool}>
                    {schoolName}
                  </Text>
                  <View style={styles.momentsSubtitle}>
                    <View style={{ marginRight: 8, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.momentsSubtitleText}>
                        {totalAlunos}
                      </Text>
                      <Text style={styles.momentsSubtitleText}>
                        alunos
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.momentsSubtitleText}>
                        {totalTeachers}
                      </Text>
                      <Text style={styles.momentsSubtitleText}>
                        professores
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* filtros com fotos */}
              <View style={styles.filterButtons}>
                {renderFilters}
              </View>

              <View style={styles.photosGallery}>
                {renderPhotos}
              </View>
            </View>
          </View>
        </ScrollView>

        {missionsModal}
      </LinearGradient>
    </>
  )
}

export default MomentosTela