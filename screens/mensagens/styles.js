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
  notificationTouchable: {
    margin: 12,
    marginBottom: 6,
    paddingBottom: 12,
    flex: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },
  notificationButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '90%'
  },
  notificationAvatar: {
    marginRight: 12,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  notificationOwner: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  notificationBody: {
    flexDirection: 'row',
    width: '90%'
  },
  notificationTexts: {
    width: '90%'
  },
  notificationInfos: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center'
  },
  notificationDescription: {
    fontFamily: 'Nunito',
    width: '90%',
  },
  notificationTime: {
    marginBottom: 24,
    fontFamily: 'Nunito',
    color: '#888'
  },
  // navigation hub styles
  notificationHub: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
})