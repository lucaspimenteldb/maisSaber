import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableHighlight, Image } from 'react-native'
import MomentosIcon from '../../assets/icons/MomentosIcon.js'

import { useDispatch, useSelector } from 'react-redux'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import MissionsModal from '../../components/modals/missions-modal/Modal.js'

import styles from './styles.js'

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
  const photos = [
    {
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png',
      route: 'MomentosPublicacao'
    },
    {
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png',
      route: 'MomentosPublicacao'
    },
    {
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png',
      route: 'MomentosPublicacao'
    },
    {
      image: 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png',
      route: 'MomentosPublicacao'
    },
  ]
  
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
  const renderPhotos = photos.map((photo, currentIndex) => (
    <TouchableHighlight 
      onPress={() => navigation.navigate(photo.route)}
      underlayColor="#fff"
      style={[styles.photoWrapper, {height: width}]}
      onLayout={findWidth}
      key={'photo-' + currentIndex}
    >
      <Image
        source={{ uri: photo.image }}
        style={styles.photo}
      />
    </TouchableHighlight>
  ))

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
                    Prof. Kassandra
                  </Text>
                  <View style={styles.momentsSubtitle}>
                    <View style={{ marginRight: 8, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.momentsSubtitleText}>
                        200
                      </Text>
                      <Text style={styles.momentsSubtitleText}>
                        alunos
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.momentsSubtitleText}>
                        20
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
      </View>
    </>
  )
}

export default MomentosTela