import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
    backgroundColor: '#fff'
  },
  subjects: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  buttonsWrapper: {
    margin: 0,
    marginBottom: 20,
    alignItems: 'center',
  },
  subjectsTouchable: {
    marginBottom: 10,
    marginHorizontal: 15,
    width: 120,
    height: 120,
    borderWidth: 6,
    borderColor: '#ddd',
    borderRadius: 60,
  },
  subjectCompleteCrown: {
    position: 'absolute',
    bottom: 60,
    right: 0
  },
  subjectCompleteCheck: {
    position: 'absolute',
    top: -10,
    right: 0
  },
  disciplineButton: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  disciplineButtonLabel: {
    maxWidth: 150,
    fontSize: 14,
    fontFamily: 'Nunito-ExtraBold',
    textAlign: 'center'
  },
  progressIndicator: {
    width: 120,
    height: 120,
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#00E633'
  },
  offsetLayer: {
    width: 120,
    height: 120,
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 6,
    borderLeftColor: '#ddd',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  },
  disciplineButtonMath: {
    backgroundColor: '#7F3FCF'
  },
  disciplineButtonPortuguese: {
    backgroundColor: '#0C69C4'
  },
})