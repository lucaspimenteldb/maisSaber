import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  disciplineTabs: {
    margin: 16,
    flexDirection: 'row',
    height: 44,
  },
  disciplineTabsTouchable: {
    width: '56%',
    borderRadius: 25,
  },
  disciplineTabsTouchableActive: {
    elevation: 10,
    zIndex: 10
  },
  disciplineTabsTouchableMath: {
    marginLeft: '-12%',
  },
  disciplineTabsButton: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 25,
    borderColor: '#7F3FCF',
    borderWidth: 2,
  },
  disciplineTabsButtonActive: {
    backgroundColor: '#0C69C4',
    borderWidth: 0,
  },
  disciplineTabsButtonText: {
    fontFamily: 'Nunito-Bold',
    color: '#7F3FCF',
    fontSize: 16
  },
  disciplineTabsButtonTextActive: {
    color: '#fff'
  },
  agendaItem: {
    marginTop: 16,
    marginRight: 16,
    padding: 12,
    paddingTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#F2F8FF',
    borderRadius: 6,
  },
  agendaButton: {
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  agendaItemTitle: {
    marginTop: 0,
    marginBottom: 12,
    fontFamily: 'Nunito-Bold',
    color: '#0095FF',
    fontSize: 16
  },
  agendaItemText: {
    color: '#666'
  },
  agendaTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontFamily: 'Nunito-Bold'
  }
})