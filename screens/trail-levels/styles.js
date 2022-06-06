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
  rocket: {
    marginRight: 10,
    transform: [{rotateZ: '45deg'}]
  },
  progressText: {
    marginTop: 6,
    fontSize: 16,
    color: '#fff',
  },
  progressBar: {
    marginHorizontal: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8C4EDA',
  },
  progressInner: {
    height: 8,
    borderRadius: 4,
    width: '30%',
    backgroundColor: '#fff',
  },
  trailsHub: {
    marginTop: 24,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  buttonWrapper: {
    margin: 8,
    width: 150,
    alignItems: 'center',
    position: 'relative'
  },
  buttonLock: {
    position: 'absolute',
    top: 50,
    right: 0,
    zIndex: 10,
    elevation: 10,
  },
  buttonCrowns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonMiddleCrown: {
    marginHorizontal: 8,
    marginBottom: 8,
  },
  buttonTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#0f0'
  },
  buttonTouchableDisabled: {
    borderColor: '#7488A8'
  },
  buttonContent: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#630FCC'
  },
  buttonContentDisabled: {
    backgroundColor: '#7488A8'
  },
  buttonText: {
    marginTop: 6,
    color: '#630FCC',
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold'
  },
  buttonTextDisabled: {
    color: '#7488A8'
  },
  iconOpacity: {
    opacity: 0.5
  }
})