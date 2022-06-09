import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
    backgroundColor: '#fff'
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
    bottom: 26,
    right: '39%'
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
  seeRewards: {
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  reward: {
    marginLeft: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#09b',
    borderRadius: 8,
    borderBottomWidth: 6,
    borderColor: '#079'
  }
})