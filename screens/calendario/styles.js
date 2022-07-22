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

  titleContent: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#000',
    margin: 12
  },
  contentBooks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '95%',
    alignSelf: 'center'
  },
  backgroundBooks: {
    borderRadius: 8,
    width: 160,
    height: 204,
    margin: 12,
  },
  titleBook: {
    fontSize: 13,
    fontFamily: 'Nunito-ExtraBold',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
  },

  filterSelect: {
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 10,
    width: '95%',
    alignSelf: 'center',
  },

  titleDayReminder: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#000',
    marginLeft: 20,
    marginTop: 30
  },

  tabArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabBar: {
    backgroundColor: 'transparent', 
    elevation: 0, 
    borderBottomWidth: 1, 
    borderBottomColor: '#C4C4C4', 
    width: '90%', 
    alignSelf: 'center'
  },
  tabBarLabel: {
    fontFamily: 'Nunito-Bold'
  },
  tabBarIndicator: {
    backgroundColor: '#4B089F', 
    height: 3
  }
})