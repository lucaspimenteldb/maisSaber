import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  publicationCommentsFeed: {
    marginTop: 18,
  },
  publicationCommentsHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  publicationCommentsAvatar: {
    marginRight: 12,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  publicationCommentsOwner: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16
  },
  publicationCommentsSubtitle: {
    flexDirection: 'row'
  },
  publicationCommentsSubtitleText: {
    marginRight: 8,
    fontFamily: 'Nunito',
  },
  publicationCommentsIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 6,
    right: 6
  },
  publicationCommentsBody: {
    marginLeft: 62
  },
  publicationCommentsDescription: {
    fontFamily: 'Nunito'
  },
})