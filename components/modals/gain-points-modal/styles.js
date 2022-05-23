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
    flex: 1,
    paddingTop: 16,
    paddingBottom: 46,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  modalHeader: {
    marginBottom: 16, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalTitle: {
    marginTop: 40,
    fontSize: 24,
    fontFamily: 'Nunito-ExtraBold',
    color: '#F99205'
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
    alignItems: 'center'
  },
  modalDescription: {
    marginHorizontal: 20,
    fontFamily: 'Nunito',
    fontSize: 18,
    textAlign: 'center',
  },
  modalActionButton: {
    marginTop: 2,
    height: 44,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 22,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  modalActionButtonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold'
  },
  modalActions: {
    marginVertical: 12,
    alignItems: 'center'
  }
})