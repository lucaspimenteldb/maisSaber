import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
    backgroundColor: '#630FCC',
  },
  header: {
    marginTop: 28,
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerInfo: {
    marginLeft: 12,
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'Nunito-Bold',
    color: '#fff',
    fontSize: 18,
  },
  headerText: {
    fontFamily: 'Nunito',
    color: '#fff',
    fontSize: 16,
  },
  publicationTouchable: {
    margin: 12,
    marginBottom: 6,
    padding: 12,
    flex: 1,
    borderColor: '#ddd',
    borderBottomWidth: 6,
    borderWidth: 2,
    borderRadius: 10,
  },
  publicationHeader: {
    marginTop: 0,
    margin: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  publicationAvatar: {
    marginRight: 12,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  publicationOwner: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  publicationSubtitle: {
    flexDirection: 'row'
  },
  publicationSubtitleText: {
    marginRight: 8,
    fontFamily: 'Nunito',
  },
  publicationSubtitleIcon: {
    marginRight: 4,
  },
  publicationBody: {
    marginHorizontal: 12
  },
  publicationImage: {
    marginTop: 18,
    marginBottom: 12,
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  publicationDescription: {
    marginBottom: 24,
    fontFamily: 'Nunito'
  },
  publicationMaterialsTouchable: {
    marginTop: 12,
    marginRight: 12,
    padding: 6,
    width: 280,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  publicationMaterialsButton: {
    flexDirection: 'row'
  },
  publicationMaterialsImage: {
    marginRight: 8,
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  publicationMaterialsTitle: {
    fontFamily: 'Nunito-Bold',
    width: 180,
    fontSize: 16,

  },
  publicationMaterialsText: {
    fontFamily: 'Nunito',
    fontSize: 18,
    color: '#888'
  },
  publicationActions: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  publicationActionsButtons: {
    marginRight: 12,
    marginBottom: 12,
    padding: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#777',
  },
  publicationActionsButtonsText: {
    fontFamily: 'Nunito-Bold',
    color: '#777',
    fontSize: 18,
  },
  // navigation hub styles
  publicationHub: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  publicationHubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
})