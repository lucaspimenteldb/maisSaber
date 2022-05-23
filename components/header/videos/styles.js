import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerStacks: {
    marginRight: 24,
  },
  headerItemsTitle: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18
  },
  crowns: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  crownsText: {
    fontFamily: 'Nunito-ExtraBold',
    color: '#F6970D',
    fontSize: 16,
  },
})