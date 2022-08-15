import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    minHeight: '100%',
  },
  container: {
    flex: 1
  },
  header: {
    padding: 20,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    marginTop: -50
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
    width: 150,
    height: 60,
    backgroundColor: 'transparent'
  },
  tabTouchableAtiva: {
    backgroundColor: 'transparent'
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    borderBottomWidth: 4,
    height: '100%'
  },
  tabText: {
    marginLeft: 12,
    fontFamily: 'Nunito-Bold',
    color: '#000',
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
  opacityContainer: {
    opacity: 0.6,
    width: '120%',
    position: 'absolute',
    backgroundColor: '#000',
    height: 100
  },

  cardContent: {
    backgroundColor: '#fff',
    width: '90%',
    height: 90,
    borderRadius: 7,
    borderBottomWidth: 3,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  titleAula: {
    fontFamily: 'Nunito-Black',
    color: '#4D4D4D'
  },
  statusAula: {
    fontFamily: 'Nunito-SemiBold',
    marginTop: 8,
    fontSize: 12
  },

  titleDisciplina: {
    paddingHorizontal: 14,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#000'
  },
  containerSemAulas: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  semAulasText: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold'
  }
})