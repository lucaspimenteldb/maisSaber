import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
  },
  backButtonWrapper: {
    height: 44,
    width: 96,
    margin: 12,
    borderRadius: 22,
  },
  backButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 22,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderBottomWidth: 4,
    borderBottomColor: '#ddd'
  },
  backButtonText: {
    color: '#000',
    fontFamily: 'Nunito-Bold'
  },
  userInformation: {
    marginTop: 16,
    marginLeft: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInformationAvatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  nameProgressWrapper: {
    marginLeft: 24,
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
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold'
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
  profileHub: {
    marginTop: 24,
    padding: 16,
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileHubIcon: {
    transform: [{rotate: ('180deg')}]
  },
  profileHubButton: {
    marginBottom: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#EC494A',
    borderColor: '#CDCDCD',
    borderBottomWidth: 4,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 8,
    padding: 20
  },
  profileHubButtonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#2B2B2B'
  }
})