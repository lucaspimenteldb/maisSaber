import React from 'react'
import { ScrollView, View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View>
          <TouchableHighlight onPress={() => navigation.navigate('HomeOne')}>
            <View style={styles.button}>
              <Text>oi</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#630FCC'
  }
})

export default HomeScreen