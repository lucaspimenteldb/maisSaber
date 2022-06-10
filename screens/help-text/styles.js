import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff'
  },
  pageWrapper: {
    paddingTop: 20,
  },
  backButton: {
    margin: 16,
    paddingRight: 2,
    paddingTop: 4,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  title: {
    marginLeft: 16,
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold',
    color: '#630FCC'
  },
  descriptionTitle: {
    marginBottom: 24,
    marginLeft: 16,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  description: {
    marginBottom: 24,
    marginLeft: 16,
    fontFamily: 'Nunito'
  },
  menuTouchable: {
    marginBottom: 12,
    marginHorizontal: 16,
    borderRadius: 26,
    alignSelf: 'stretch'
  },
  menuWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 26,
    backgroundColor: '#630FCC',
    borderBottomColor: '4B089F',
    borderBottomWidth: 4,
  },
  menuText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#fff'
  },
})