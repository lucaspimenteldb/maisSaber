import React from 'react';
import { ScrollView, View, TouchableHighlight, Text } from 'react-native';
import ComputadorAjudaIcon from '../../assets/icons/ComputadorAjudaIcon.js'

import styles from './styles.js'
import ChevronIcon from '../../assets/icons/ChevronIcon.js';

const HelpTextScreen = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.page}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableHighlight
            underlayColor='#fff'
            onPress={() => navigation.goBack()}
            style={styles.backButtonWrapper}
          >
            <View style={styles.backButton}>
              <ChevronIcon />
            </View>
          </TouchableHighlight>
          <Text style={styles.title}>
            Dúvidas sobre {route.params.category}
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.pageWrapper}>

          <Text style={styles.descriptionTitle}>
            Perguntas frequentes:
          </Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate incidunt modi tempora libero laborum, aliquam alias, ut culpa aut tenetur nulla delectus praesentium, quasi amet unde perspiciatis consequatur error!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quod veritatis voluptas accusantium? Corrupti minus sit veritatis nostrum odit laboriosam facilis consequuntur necessitatibus magnam at velit quae, reiciendis fugiat dolores.
          </Text>

          <Text style={styles.descriptionTitle}>
            Não conseguiu tirar as suas dúvidas?
          </Text>
          <TouchableHighlight
            style={styles.menuTouchable}
            onPress={() => navigation.navigate('a')}
            underlayColor='#fff'
          >
            <View style={styles.menuWrapper}>
              <Text style={styles.menuText}>
                Enviar dúvida
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.menuTouchable}
            onPress={() => navigation.navigate('a')}
            underlayColor='#fff'
          >
            <View style={styles.menuWrapper}>
              <Text style={styles.menuText}>
                Suporte por whatsapp
              </Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </>
  )
}

export default HelpTextScreen