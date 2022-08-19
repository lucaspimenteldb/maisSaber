import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  pageWrapper: {
    minHeight: '100%',
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
    height: 180,
    borderRadius: 10,
  },
  carouselImageFilter: {
    marginVertical: 16,
    marginLeft: 16,
    position: 'absolute',
    width: 340,
    height: 180,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, .2)'
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
    flexDirection: 'row',
    paddingHorizontal: 19,
    top: -100
  },
  buttonCarouselIndicator: {
    margin: 4,
    width: 15,
    height: 6,
    backgroundColor: '#bbb',
    borderRadius: 5,
  },
  buttonCarouselIndicatorActive: {
    width: 59,
    backgroundColor: '#4015B9',
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
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  navigationHubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: -80
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
  },
  fakeContainer: {
    backgroundColor: 'transparent',
    height: 110
  },
  headerArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1
  },
  avatarNameArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  userInformationAvatar: {
    width: 60,
    height: 60,
    borderRadius: 99,
    borderColor: '#fff',
    borderWidth: 2
  },
  notificationButton: {
    paddingRight: 2,
    paddingTop: 4,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 20,
    borderBottomColor: '#480898',

    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderBottomWidth: 4,
  },
  userArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameText: {
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold',
    color: '#FFF'
  },
  typeUserText: {
    color: '#fff',
    fontFamily: 'Nunito-Medium'
  },
  containerBooks: {
    paddingHorizontal: 6
  },
  livroText: {
    color: '#1C1C1C',
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    paddingHorizontal: 19,
    marginTop: 30
  },
  livroImage: {
    width: 117,
    height: 159,
    borderRadius: 8
  },
  livroScroll: {
    paddingLeft: 12,
    marginTop: 10
  },
  livroOpacity: {
    position: 'absolute',
    width: 117,
    height: 159,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.18)'
  },
  fakeBox: {
    height: 300
  }
})