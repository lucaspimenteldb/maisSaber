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
    marginTop: 6,
    fontFamily: 'Nunito',
    color: '#fff',
    fontSize: 16,
  },
  title: {
    marginLeft: 12,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  atividadeTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
  },
  atividadeData: {
    fontFamily: 'Nunito',
    fontSize: 16,
  },
  atividadesTouchable: {
    marginTop: 12,
    marginLeft: 12,
    marginBottom: 24,
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: 300,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#37A949',
    borderRadius: 10,
  },
  atividadeFooter: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  atividadeStatus: {
    fontFamily: 'Nunito-Bold',
    color: '#37A949'
  },
  atividadeStatusFeita: {
    fontFamily: 'Nunito-Bold',
    color: '#480898'
  },
  atividadeStatusExpirada: {
    fontFamily: 'Nunito-Bold',
    color: '#980808'
  },
  atividadeDica: {
    fontFamily: 'Nunito-Bold',
    color: '#777'
  },
  bolsa: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  // tabs
  tabTouchable: {
    marginLeft: 12,
    marginBottom: 32,
    padding: 12,
    width: 150,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#2F0565',
    borderBottomWidth: 2
  },
  tabTouchableAtiva: {
    backgroundColor: '#480898'
  },
  tabButton: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabText: {
    marginLeft: 12,
    fontFamily: 'Nunito-Bold',
    color: '#111',
    fontSize: 18
  },
  tabTextAtiva: {
    color: '#fff'
  },
  // navigation hub styles
  disciplinasHub: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    backgroundColor: '#eee',
  },
})