import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    padding: 16,
    minHeight: '100%',
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 16,
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
  title: {
    marginBottom: 12,
    fontFamily: 'Nunito-Bold',
    fontSize: 18
  },
  infoSection: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    marginVertical: 3,
    fontSize: 16,
    color: '#444',
    fontFamily: 'Nunito',
  },
  icon: {
    marginRight: 8,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0095FF',
    borderRadius: 4,
    borderBottomWidth: 4,
    borderBottomColor: '#0B5E99'
  },
  button: {
    marginBottom: 24,
    height: 44,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0095FF',
    borderRadius: 8,
    borderBottomWidth: 4,
    borderBottomColor: '#0B5E99'
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    color: '#fff',
    fontSize: 16,
  },
  text: {
    fontFamily: 'Nunito',
  }
})