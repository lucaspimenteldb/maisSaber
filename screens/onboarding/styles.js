import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    paddingTop: 40,
    minHeight: '100%',
  },
  logo: {
    marginLeft: 16,
  },
  carousel: {
    flexDirection: 'row'
  },
  lastCarousel: {
    marginRight: 16,
  },
  carouselImage: {
    marginVertical: 22,
    marginLeft: 22,
    width: 330,
    height: 240,
    borderRadius: 10,
  },
  carouselTitle: {
    marginTop: 24,
    marginLeft: 16,
    marginBottom: 4,
    width: 340,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
    textAlign: 'center',
    color: '#1C1C1C'
  },
  carouselDescription: {
    marginLeft: 16,
    width: 340,
    fontFamily: 'Nunito',
    color: '#000',
    opacity: 0.4,
    textAlign: 'center'
  },
  carouselIndicatorsWrapper: {
    position: 'absolute',
    top: 370,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonCarouselIndicator: {
    margin: 4,
    width: 10,
    height: 10,
    backgroundColor: '#bbb',
    borderRadius: 5,
  },
  buttonCarouselIndicatorActive: {
    width: 10,
    backgroundColor: '#630FCC',
  },
  buttonSignUp: {
    width: 331,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 33,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderBottomColor: '#54199F',
    borderRadius: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  buttonSignIn: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#6344FF',
    borderColor: '#47378A',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold',
  },
  buttonTextSignUp: {
    color: '#8C3475',
    fontFamily: 'Nunito-Bold',
  },
  whiteBackground: {
    width: '100%',
    height: '200%',
    position: 'absolute',
    top: 250,
    backgroundColor: '#fff',
    borderRadius: 40,
    elevation: -1,
    zIndex: -1
  }
})