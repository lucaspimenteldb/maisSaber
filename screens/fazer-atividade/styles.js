import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  pageWrapper: {
    margin: 12,
    minHeight: '100%',
    backgroundColor: '#f3f3f3'
  },
  barraProgressoTexto: {
    marginBottom: 4,
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  barraProgresso: {
    marginBottom: 24,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 4
  },
  barraProgressoInterior: {
    height: 8,
    backgroundColor: '#00D33B',
    borderRadius: 4,
  },
  questaoContainer: {
    marginTop: 16,
  },
  titulo: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  texto: {
    fontFamily: 'Nunito',
    fontSize: 16,
  },
  identificadorTexto: {
    fontFamily: 'Nunito',
    fontSize: 14,
    color: '#620ECC'
  },
  alternativasTouchable: {
    marginTop: 12,
    padding: 12,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#480898',
    backgroundColor: '#fff'
  },
  alternativasTexto: {
    fontFamily: 'Nunito',
    fontSize: 16,
  },
  alternativasTouchableSelecionada: {
    backgroundColor: '#6344FF'
  },
  alternativasTextoSelecionada: {
    fontFamily: 'Nunito-Bold',
    color: '#fff'
  },
  botaoTouchable: {
    marginTop: 36,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6344FF',
    borderRadius: 25,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  baixarArquivoTouchable: {
    marginTop: 12,
    marginBottom: 12,
    width: 240,
  },
  enviarArquivoTouchable: {
    marginTop: 12,
    marginBottom: 12,
    width: 240,
    backgroundColor: '#fff'
  },
  proximaQuestaoTexto: {
    fontFamily: 'Nunito-Bold',
    color: '#fff',
    fontSize: 16
  },
  baixarArquivoBotao: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  enviarArquivoBotao: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  baixarArquivoTexto: {
    marginLeft: 12,
  },
  enviarArquivoTexto: {
    marginLeft: 12,
    color: '#480898'
  }, 
  input: {
    paddingTop: 16,
    padding: 16,
    height: 120,
    fontFamily: 'Nunito',
    borderWidth: 1,
    borderColor: '#54199F',
    borderBottomWidth: 6,
    borderRadius: 6,
  },
  finalizarAtividade: {
    backgroundColor: '#088B05',
    borderBottomColor: '#0C650A'
  },
  videoWrapper: {
    position: 'relative'
  },
  video: {
    borderRadius: 10,
    height: 250,
  },
  playBotao: {
    paddingLeft: 2,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 95,
    left: '42%',
    backgroundColor: '#480898',
    borderRadius: 30,
  },
  seta: {
    marginLeft: 12,
    transform: [{rotate: ('180deg')}]
  },
  containerConcluido: {
    alignItems: 'center'
  },
  finalizarFlex: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  imagemConclusao: {
    marginBottom: 24,
    width: 318,
    height: 203
  },
  textosConcluida: {
    marginBottom: 6,
    textAlign: 'center'
  }
})