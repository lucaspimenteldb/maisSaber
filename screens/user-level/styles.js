import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
    backgroundColor: '#fff'
  },
  levels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  buttonsWrapper: {
    margin: 0,
    marginBottom: 24,
    alignItems: 'center',
  },
  buttonRewardWrapper: {
    margin: 16,
    height: 44,
    width: '90%',
    borderRadius: 22,
  },
  buttonReward: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 22,
    borderBottomWidth: 4,
    borderColor: '#54199F'
  },
  buttonRewardText: {
    color: '#630FCC',
    fontFamily: 'Nunito-Bold'
  },
  buttonLevel: {
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold'
  },
  levelsTouchable: {
    marginVertical: 10,
    marginHorizontal: 20,
    width: 120,
    height: 120,
    borderWidth: 6,
    borderColor: '#ddd',
    borderRadius: 60,
  },
  cronws: {
    marginBottom: -6,
  },
  cronwsText: {
    fontFamily: 'Nunito-Bold', 
    color: '#F99D0F',
    fontSize: 16,
  },
  levelCompleteCrown: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 100,
    right: '39%'
  },
  levelLock: {
    position: 'absolute',
    bottom: 120,
    right: 20
  },
  levelCompleteCheck: {
    position: 'absolute',
    top: -10,
    right: 0
  },
  button: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonLabel: {
    marginTop: 10,
    maxWidth: 150,
    fontSize: 18,
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
})