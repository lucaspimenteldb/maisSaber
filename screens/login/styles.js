import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pageWrapper: {
    flex: 1,
  },
  pageContentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
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
    fontFamily: 'Nunito-Black',
    color: '#000',
    fontSize: 24
  },
  title: {
    marginBottom: 32,
    color: '#000',
    opacity: 0.4,
    fontSize: 15,
    fontFamily: 'Nunito-SemiBold'
  },
  input: {
    marginBottom: 12,
    padding: 16,
    fontFamily: 'Nunito',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 6,
    borderRadius: 10,
  },
  inputActive: {
    borderColor: '#480898'
  },
  buttonSignIn: {
    width: '100%',
    alignSelf: 'center',
    height: 50,
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#6344FF',
    borderColor: '#47378A',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Nunito-Bold',
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 50,
  },
  titleInput: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000',
    opacity: 0.6,
    marginBottom: 12
  },
  esqueciSenha: {
    color: '#44378B',
    fontFamily: 'Nunito-SemiBold',
    borderBottomWidth: 0.5,
    borderColor: '#44378B',
    width: 130,
    alignSelf: 'flex-end'
  }
})