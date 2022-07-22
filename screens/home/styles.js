import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
    backgroundColor: '#F6A3A5',
  },
  //carousel
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
  carouselImageFilter: {
    position: 'absolute',
    top: 16,
    left: 16,
    bottom: 16,
    right: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, .4)'
  },
  carouselTitle: {
    position: 'absolute',
    top: 170,
    left: 32,
    width: 340,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
    color: '#fff'
  },
  carouselDescription: {
    position: 'absolute',
    top: 192,
    left: 32,
    width: 340,
    fontFamily: 'Nunito',
    fontSize: 16,
    color: '#fff'
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
    backgroundColor: '#fff',
  },
  // end carousel
  userInformation: {
    marginTop: 28,
    margin: 12,
    flexDirection: 'row'
  },
  userInformationAvatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: '#fff',
    borderWidth: 4,
  },
  nameProgressWrapper: {
    marginLeft: 24,
    flex: 1,
  },
  userInformationName: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold'
  },
  userInformationLevel: {
    flexDirection: 'row'
  },
  userInformationLevelText: {
    color: '#eee',
    fontSize: 16,
    fontFamily: 'Nunito-Bold'
  },
  progressBar: {
    marginTop: 12,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#8C4EDA',
  },
  progressNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -24,
    right: 0,
  },
  progressNumberText: {
    marginRight: 8,
    fontSize: 14,
    fontFamily: 'Nunito-ExtraBold',
    color: '#fff'
  },
  progressInner: {
    height: 6,
    borderRadius: 4,
    width: '30%',
    backgroundColor: '#fff',
  },
  // navigation hub styles
  navigationHub: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  navigationHubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  navigationHubTouchable: {
    margin: 6,
  },
  navigationHubBack: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#620ECC',
    borderRadius: 15,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderBottomWidth: 10,
    borderColor: '#54199F',
    width: 105,
    height: 100,
  },
  navigationHubButtonText: {
    marginTop: 12,
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Nunito-ExtraBold'
  },
  navigationHubButtonTextSecondary: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold'
  },
  navigationHubTouchableHelp: {
    marginLeft: 16,
    marginRight: 20,
  },
  navigationHubButtonHelp: {
    paddingLeft: 14,
    paddingRight: 14,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1884D0',
    borderRadius: 14,
    borderBottomWidth: 8,
    borderBottomColor: '#0A65A5'
  },
  navigationHubTouchableShare: {
    marginRight: 16,
  },
  navigationHubButtonShare: {
    paddingLeft: 14,
    paddingRight: 14,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9E1C36',
    borderRadius: 14,
    borderBottomWidth: 8,
    borderBottomColor: '#64081A'
  },
  seeTooTitle: {
    paddingLeft: 16,
    marginTop: 30,
    marginBottom: 18,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
  }
})