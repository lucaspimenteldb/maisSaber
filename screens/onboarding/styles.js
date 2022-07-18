import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    paddingTop: 60,
    minHeight: '100%',
    backgroundColor: '#711DBC'
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
    marginVertical: 16,
    marginLeft: 16,
    width: 340,
    height: 240,
    borderRadius: 10,
  },
  carouselTitle: {
    marginTop: 12,
    marginLeft: 16,
    marginBottom: 4,
    width: 340,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 24,
  },
  carouselDescription: {
    marginLeft: 16,
    width: 340,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#222'
  },
  carouselIndicatorsWrapper: {
    marginTop: 16,
    marginLeft: 12,
    flexDirection: 'row',
  },
  buttonCarouselIndicator: {
    margin: 4,
    width: 10,
    height: 10,
    backgroundColor: '#bbb',
    borderRadius: 5,
  },
  buttonCarouselIndicatorActive: {
    width: 50,
    backgroundColor: '#630FCC',
  },
  buttonSignUp: {
    margin: 16,
    marginTop: 48,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderBottomColor: '#54199F',
    borderRadius: 25,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
  },
  buttonSignIn: {
    margin: 16,
    marginTop: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    backgroundColor: '#6344FF',
    borderBottomColor: '#54199F'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
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