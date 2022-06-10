import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  disciplines: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsWrapper: {
    alignItems: 'center',
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
  disciplineButtonLabel: {
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold'
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