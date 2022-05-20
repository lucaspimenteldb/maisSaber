import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menuItems: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#630FCC'
  },
  crowns: {
    marginLeft: 36,
    marginRight: 36,
    flexDirection: 'row',
    alignItems: 'center'
  },
  crownsText: {
    fontFamily: 'Nunito-ExtraBold',
    color: '#F6970D',
    fontSize: 16,
  },
})