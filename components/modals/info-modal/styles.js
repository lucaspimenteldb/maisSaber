import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
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
    width: '95%',
    height: 300,
    alignSelf: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  modalHeader: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Nunito-ExtraBold'
  },
  closeButton: {
    width: 34,
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AA0A00',
    borderRadius: 17,
  },
  modalContentTitle: {
    marginVertical: 4,
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  modalActionButton: {
    marginTop: 2,
    height: 44,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED484A',
    borderRadius: 8
  },
  modalActionButtonBorderBottom: {
    backgroundColor: '#3C368C',
    width: '100%',
    height: 20,
    borderRadius: 20,
    position: 'absolute',
    bottom: -5
  },
  modalActionButtonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold'
  },
  modalActions: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },

  modalImageBook: {
    width: 125,
    height: 167,
    marginTop: 20
  },
  modalTitleBook: {
    fontFamily: 'Nunito-ExtraBold',
    color: '#000',
    width: 157
  },
  modalSubtitleBook: {
    fontFamily: 'Nunito-Medium',
    marginTop: 10
  },
  modalInfoBookArea: {
    justifyContent: 'center'
  },

  modalImageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    top: -20
  },
  modalTitleBody: {
    color: '#000',
    fontFamily: 'Nunito-Bold',
    marginTop: 18
  },
  modalTextBody: {
    textAlign: 'center',
    color: '#000',
    opacity: 0.6,
    fontFamily: 'Nunito-SemiBold'
  }
})