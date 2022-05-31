import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pageWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 60,
  },
  pageContentContainer: {
    flex: 1, 
    justifyContent: 'space-between'
  },
  backButton: {
    paddingRight: 2,
    paddingTop: 4,
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 22,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  backButtonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    marginTop: 48,
    fontFamily: 'Nunito',
    color: '#520BAC',
  },
  title: {
    marginBottom: 32,
    color: '#520BAC',
    fontSize: 20,
    fontFamily: 'Nunito-ExtraBold'
  },
  input: {
    marginBottom: 12,
    padding: 16,
    fontFamily: 'Nunito',
    borderWidth: 1,
    borderColor: '#aaa',
    borderBottomWidth: 6,
    borderRadius: 6,
  },
  inputActive: {
    borderColor: '#630FCC'
  },
  buttonSignUp: {
    marginTop: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#630FCC',
    borderRadius: 25,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  buttonSignIn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6344FF',
    borderRadius: 25,
    borderBottomWidth: 4,
    borderBottomColor: '#54199F'
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 14,
  }
})