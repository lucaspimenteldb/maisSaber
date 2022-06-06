import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    paddingTop: 60,
    minHeight: '100%',
    backgroundColor: '#fff'
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    marginHorizontal: 16,
    height: 8,
    width: '70%',
    borderRadius: 4,
    backgroundColor: '#ddd',
  },
  progressInner: {
    height: 8,
    borderRadius: 4,
    width: '30%',
    backgroundColor: '#31D25E',
  },
  textSizeTitle: {
    marginTop: 12,
    marginHorizontal: 16,
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  // text size buttons
  buttonWrapper: {
    marginTop: 12,
    borderRadius: 22,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#54199F',
    borderRadius: 22,
  },
  buttonSizeUp: {
    marginLeft: 12,
  },
  buttonText: {
    color: '#54199F',
    fontFamily: 'Nunito-Bold'
  },
  textSizeButtons: {
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  // end text size buttons
  questionWrapper: {
    margin: 16,
    marginTop: 24
  },
  levelTitle: {
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold',
    color: '#4B089F'
  },
  levelSubtext: {
    marginVertical: 6,
  },
  question: {
    marginVertical: 12,
    fontSize: 16,
    fontFamily: 'Nunito'
  },
  buttonAnswerTouchable: {
    marginTop: 24,
    height: 50,
    flex: 1,
    borderRadius: 25,
  },
  buttonAnswer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#620ECC',
    borderRadius: 25,
    borderColor: '#4B089F',
    borderBottomWidth: 4,
  },
  buttonAnswerText: {
    color: '#fff',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 16,
  },
  alternativesButton: {
    marginBottom: 12,
    padding: 12,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 22,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#4B089F',
  },
  selectedAlternativeText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold'
  },
  alternativeText: {
    fontFamily: 'Nunito-Bold'
  },
  selectedAlternativesButton: {
    backgroundColor: '#620ECC'
  }
})