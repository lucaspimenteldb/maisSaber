import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
    backgroundColor: '#300567'
  },
  pageInformation: {
    marginTop: -40,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  pageActionsButtons: {
    marginTop: 16,
    marginBottom: 30,
    flexDirection: 'row'
  },
  pageTitle: {
    marginHorizontal: 16,
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold',
  },
  pageDescription: {
    marginTop: 8,
    marginBottom: 16,
    marginHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Nunito'
  },
  subjects: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  buttonsWrapper: {
    margin: 0,
    marginBottom: 20,
    alignItems: 'center',
  },
  subjectsTouchable: {
    marginBottom: 10,
    marginHorizontal: 15,
    width: 120,
    height: 120,
    borderWidth: 6,
    borderColor: '#ddd',
    borderRadius: 60,
  },
  subjectCompleteCrown: {
    position: 'absolute',
    bottom: 60,
    right: 0
  },
  subjectCompleteCheck: {
    position: 'absolute',
    top: -10,
    right: 0
  },
  disciplineButton: {
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  disciplineButtonLabel: {
    maxWidth: 150,
    fontSize: 14,
    fontFamily: 'Nunito-ExtraBold',
    textAlign: 'center'
  },
  progressIndicator: {
    width: 120,
    height: 120,
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#ddd'
  },
  offsetLayer: {
    width: 120,
    height: 120,
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 6,
    borderLeftColor: '#ddd',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  },
  disciplineButtonMath: {
    backgroundColor: '#7F3FCF'
  },
  disciplineButtonPortuguese: {
    backgroundColor: '#0C69C4'
  },
  modalActionButton: {
    marginLeft: 12,
    paddingTop: 2,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 22,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  modalActionButtonSecondary: {
    marginLeft: 12,
    paddingTop: 2,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5D00E',
    borderRadius: 22,
    borderBottomWidth: 4,
    borderBottomColor: '#CDB900'
  },
  headerButtons: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  playButton: {
    paddingTop: 2,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -170,
    backgroundColor: '#630FCC',
    borderRadius: 30,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  }
})