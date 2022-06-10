import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff'
  },
  pageWrapper: {
    paddingTop: 20,
    alignItems: 'center'
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold',
    color: '#630FCC'
  },
  description: {
    marginBottom: 24,
    textAlign: 'center'
  },
  menuTouchable: {
    marginBottom: 12,
    marginHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'stretch'
  },
  menuWrapper: {
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomWidth: 4,
  },
  menuText: {
    marginLeft: 12,
    fontFamily: 'Nunito-ExtraBold',
    color: '#fff',
    fontSize: 20,
  },
})