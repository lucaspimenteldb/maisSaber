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
  notificationButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  notificationTouchable: {
    margin: 12,
    marginBottom: 6,
    padding: 12,
    flex: 1,
    borderColor: '#ddd',
    borderBottomWidth: 6,
    borderWidth: 2,
    borderRadius: 10,
  },
  notificationOwner: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  notificationDescription: {
    fontFamily: 'Nunito',
    flex: 1
  },
  notificationBody: {
    marginLeft: 12,
    marginRight: 18,
    flex: 1
  },
  notificationFooter: {
    position: 'absolute',
    bottom: 0,
    right: -18
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