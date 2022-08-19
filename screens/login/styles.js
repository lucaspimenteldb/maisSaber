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
    top: 46,
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
  },
  accessApp: {
    color: '#44378B',
    fontFamily: 'Nunito-SemiBold',
    borderBottomWidth: 0.5,
    borderColor: '#44378B',
    width: 180,
    alignSelf: 'flex-start',
    marginTop: -20,
    marginBottom: 30
  },
  containerBackButton: {
    borderBottomWidth: 4,
    borderWidth: 1,
    borderColor: '#44378B',
    borderRadius: 5,
    width: 81,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textBackButton: {
    color: '#44378B',
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    marginLeft: 8
  }
})