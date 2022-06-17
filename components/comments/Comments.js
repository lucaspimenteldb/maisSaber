import React, { useState } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import LixoIcon from '../../assets/icons/LixoIcon.js'
import InformacaoIcon from '../../assets/icons/InformacaoIcon.js'

import styles from './styles.js'

const Comments = ({ avatar, name, year, date, comment, owner, deleteModal, reportModal }) => {

  return (
    <View style={styles.publicationCommentsFeed}>
      <View style={styles.publicationCommentsHeader}>
        <TouchableHighlight 
          underlayColor='#fff' 
          style={styles.publicationCommentsIcon}
          onPress={() => reportModal()}
        >
          { owner ? <LixoIcon /> : <InformacaoIcon /> }
        </TouchableHighlight>
        <Image
          source={{ uri: avatar ? avatar : 'https://pbs.twimg.com/profile_images/1484604685671493632/nifvTODz_400x400.png' }}
          style={styles.publicationCommentsAvatar}
        />
        <View>
          <Text style={styles.publicationCommentsOwner}>
            {name ? name : 'Kassandra'} - {year ? year : '3° ano'}
          </Text>
          <View style={styles.publicationCommentsSubtitle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.publicationCommentsSubtitleText}>
                {date ? date : '26 de maio'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.publicationCommentsBody}>
        <Text style={styles.publicationCommentsDescription}>
          {comment ? comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum consequuntur recusandae doloribus autem ducimus?...'}
        </Text>
      </View>
    </View>


  )
}

export default Comments