import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
    backgroundColor: '#4B089F'
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    color: '#fff'
  },
  progressText: {
    marginTop: 6,
    fontSize: 16,
    color: '#fff',
  },
  progressBar: {
    marginHorizontal: 16,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#8C4EDA',
  },
  progressInner: {
    height: 6,
    borderRadius: 4,
    width: '30%',
    backgroundColor: '#fff',
  },
  trailsHub: {
    marginTop: 24,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  buttonTouchableMath: {
    marginTop: 10,
    marginLeft: 16,
    marginRight: 20,
  },
  buttonMath: {
    paddingLeft: 14,
    paddingRight: 14,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#630FCC',
    borderRadius: 14,
    borderBottomWidth: 8,
    borderBottomColor: '#4B089F'
  },
  buttonText: {
    marginTop: 4,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold'
  },
  buttonTextSecondary: {
    marginTop: 6,
    color: '#fff',
    fontSize: 16,
  },
  buttonTouchablePortuguese: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 20,
  },
  buttonPortuguese: {
    paddingLeft: 14,
    paddingRight: 14,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#005FAA',
    borderRadius: 14,
    borderBottomWidth: 8,
    borderBottomColor: '#074C83'
  },
})