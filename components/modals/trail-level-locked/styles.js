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
  },
  modalContentTitle: {
    marginVertical: 4,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#630FCC'
  },
  modalContentText: {
    color: '#333',
  },
  buttonWrapper: {
    width: '100%',
    height: 44,
    borderRadius: 22,
  },
  modalActionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderBottomWidth: 4,
    borderBottomColor: '#54199F',
    borderRadius: 22,
  },
  modalActionButtonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold',
  },
  modalActions: {
    marginVertical: 12,
  }
})