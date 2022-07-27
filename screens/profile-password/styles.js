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
  profileHub: {
    marginTop: 24,
    padding: 16,
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    marginBottom: 12,
    padding: 16,
    fontFamily: 'Nunito',
    borderWidth: 1,
    borderColor: '#aaa',
    borderBottomWidth: 6,
    borderRadius: 6,
  },
  inputActive: {
    borderColor: '#EC494A'
  },
  inputLabel: {
    fontFamily: 'Nunito-Bold',
  },
  buttonSave: {
    marginTop: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B089F',
    borderBottomColor: '#8C4EDA',
    borderRadius: 8,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderBottomWidth: 4,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 14,
  }
})