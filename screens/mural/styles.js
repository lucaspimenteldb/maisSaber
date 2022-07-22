import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
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
    marginLeft: 62
  },
  publicationDescription: {
    fontFamily: 'Nunito'
  },
  publicationFooter: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  publicationFooterText: {
    marginRight: 8,
    fontFamily: 'Nunito-ExtraBold',
    color: '#4B089F'
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
})