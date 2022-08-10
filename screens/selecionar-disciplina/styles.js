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
  disciplinasTouchable: {
    margin: 12,
    marginBottom: 6,
    flex: 1,
    elevation: 3,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
  },
  disciplinasButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '90%'
  },
  disciplinasImagem: {
    marginRight: 12,
    height: '100%',
    width: 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  disciplinasNome: {
    marginTop: 12,
    marginBottom: 6,
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  disciplinasBody: {
    width: '90%'
  },
  arrow: {
    position: 'absolute',
    bottom: 12,
    right: 24,
    alignItems: 'center'
  },
  notificacoes: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 12,
    right: 23,
    backgroundColor: '#f00',
    borderRadius: 12,
  },
  notificacoesTexto: {
    color: '#fff',
    fontFamily: 'Nunito-Bold'
  },
  disciplinasProfessor: {
    marginBottom: 16,
    fontFamily: 'Nunito',
    color: '#888'
  },
  // navigation hub styles
  disciplinasHub: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  input: {
    width: '95%',
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    right: -10,
    alignSelf: 'center',
    borderColor: '#E6E6E6',
    borderBottomWidth: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderRadius: 8
  },
  iconInput: {
    position: 'absolute',
    right: 30,
    top: 32
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectDisciplineText: {
    color: '#1C1C1C',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
    paddingHorizontal: 20
  }
})