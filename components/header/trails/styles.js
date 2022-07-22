import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    marginRight: 16,
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
    backgroundColor: '#ED484B'
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
  backButton: {
    paddingRight: 2,
    paddingTop: 4,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED484B',
    borderRadius: 20,
    borderBottomColor: '#EE3737',

    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderBottomWidth: 4,
  },
})