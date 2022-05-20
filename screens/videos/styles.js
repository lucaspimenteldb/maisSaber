import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    flex: 1,
  },
  backButtonWrapper: {
    height: 44,
    width: 96,
    margin: 16,
    borderRadius: 22,
  },
  backButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 22,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  backButtonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold'
  },
  disciplines: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  disciplineTouchable: {
    marginVertical: 10,
    marginHorizontal: 15,
    width: 120,
    height: 120,
    borderWidth: 6,
    borderColor: '#ddd',
    borderRadius: 60,
  },
  disciplineButton: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  progressIndicator: {
    width: 120,
    height: 120,
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#0f0'
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