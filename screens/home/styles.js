import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: '#630FCC',
  },
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
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  navigationHubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  navigationHubButton: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 150,
    backgroundColor: '#630FCC',
    borderRadius: 14,
    borderBottomWidth: 10,
    borderBottomColor: '#54199F'
  },
  navigationHubButtonText: {
    marginTop: 12,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold'
  },
  navigationHubButtonTextSecondary: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold'
  },
  navigationHubButtonHelp: {
    marginLeft: 16,
    marginRight: 20,
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
  navigationHubButtonShare: {
    marginRight: 16,
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