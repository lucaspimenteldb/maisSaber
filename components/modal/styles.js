import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  overlay: {
    flex: 1,
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
    justifyContent: 'space-between'
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
  modalMissions: {
    marginBottom: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalMissionsBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#777'
  },
  modalMissionsTitle: {
    marginVertical: 4,
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  modalMissionsText: {
    color: '#333'
  },
  modalMissionsButton: {
    height: 44,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 14,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  modalMissionsButtonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold'
  },
  flex: {
    flex: 1,
  },
  modalMissionsActions: {
    paddingLeft: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})