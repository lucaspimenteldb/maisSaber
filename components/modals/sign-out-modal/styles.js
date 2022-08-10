import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(50, 50, 50, .4)',
    elevation: 10,
  },
  modalWrapper: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  modalWrapperTop: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  modalWrapperBottom: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    marginBottom: 16, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold'
  },
  closeButton: {
    width: 34,
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f00',
    borderRadius: 17,
  },
  modalContent: {
    marginBottom: 16,
    paddingBottom: 12,
    alignItems: 'center'
  },
  modalContentTitle: {
    marginVertical: 4,
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  modalContentText: {
    paddingHorizontal: 30,
    color: '#333',
    textAlign: 'center'
  },
  buttonWrapper: {
    width: '100%',
    height: 44,
    borderRadius: 22,
  },
  buttonWrapperSecondary: {
    marginTop: 12,
    height: 44,
    borderRadius: 22,
  },
  modalActionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderBottomColor: '#54199F',
    borderRadius: 22,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderBottomWidth: 4,
  },
  modalActionButtonSecondary: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#54199F',
    borderRadius: 22,
  },
  modalActionButtonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold'
  },
  modalActionButtonTextSecondary: {
    color: '#54199F',
    fontFamily: 'Nunito-Bold'
  },
  modalActions: {
    marginVertical: 12,
    alignSelf: 'center'
  },
  buttonSignUp: {
    width: 350,
    alignSelf: 'center',
    marginTop: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderBottomColor: '#54199F',
    borderRadius: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  buttonTextSignUp: {
    color: '#8C3475',
    fontFamily: 'Nunito-Bold',
  },
})