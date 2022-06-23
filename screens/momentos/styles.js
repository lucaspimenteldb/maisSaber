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
 momentsTouchable: {
    margin: 12,
    marginBottom: 6,
    padding: 12,
    flex: 1,
    borderColor: '#ddd',
    borderBottomWidth: 6,
    borderWidth: 2,
    borderRadius: 10,
  },
 momentsHeader: {
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
 momentsAvatar: {
    marginRight: 12,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
 momentsSchool: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
 momentsSubtitle: {
    flexDirection: 'row'
  },
 momentsSubtitleText: {
    marginRight: 4,
    fontFamily: 'Nunito',
  },
 momentsSubtitleIcon: {
    marginRight: 4,
  },
 momentsBody: {
    marginLeft: 62
  },
 momentsDescription: {
    fontFamily: 'Nunito'
  },
 momentsFooter: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
 momentsFooterText: {
    marginRight: 8,
    fontFamily: 'Nunito-ExtraBold',
    color: '#4B089F'
  },
  filterButtons: {
    margin: 12,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filterWrapper: {
    alignItems: 'center',
  },
  filterImage: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  filterText: {
    fontFamily: 'Nunito',
    fontSize: 12,
  },
  photosGallery: {
    marginTop: 24,
    marginLeft: 12,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  photoWrapper: {
    marginHorizontal: 6,
    marginBottom: 12,
    width: '29%',
  },
  // navigation hub styles
 momentsHub: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
})