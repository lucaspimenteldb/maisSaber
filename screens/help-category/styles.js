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
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bbb'
  },
  menuText: {
    marginLeft: 12,
    fontFamily: 'Nunito',
    fontSize: 16,
  },
  menuArrow: {
    paddingRight: 2,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 15,
    transform: [{rotate: '180deg'}]
  }
})