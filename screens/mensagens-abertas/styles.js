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
  notificationAvatar: {
    marginRight: 12,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  button: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#E14319'
  },
  buttonText: {
    color: '#ED4A48',
    fontFamily: 'Nunito-Bold',
  },
  title: {
    marginLeft: 12,
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold',
    color: '#1C1C1C'
  },
  message: {
    margin: 12,
    marginBottom: 0,
    padding: 12,
    backgroundColor: '#E14319',
    borderBottomWidth: 4,
    borderBottomColor: '#E14319',
    borderRadius: 20,
  },
  messageText: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: 'Nunito',
    color: '#fff',
  },
  messageDate: {
    fontFamily: 'Nunito',
    color: '#fff',
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
