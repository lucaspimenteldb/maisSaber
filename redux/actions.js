export const SHOW_MISSIONS_MODAL = 'SHOW_MISSIONS_MODAL'
export const SHOW_WELCOME_MODAL = 'SHOW_WELCOME_MODAL'
export const SHOW_SHARE_MODAL = 'SHOW_SHARE_MODAL'
export const SHOW_FEEDBACK_MODAL = 'SHOW_FEEDBACK_MODAL'
export const SHOW_GAIN_POINTS_MODAL = 'SHOW_GAIN_POINTS_MODAL'
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'
export const SET_USER = 'SET_USER'

export const setShowMissionsModal = showMissionsModal => dispatch => {
  dispatch({
    type: SHOW_MISSIONS_MODAL,
    payload: showMissionsModal
  })
}
export const setShowWelcomeModal = showWelcomeModal => dispatch => {
  dispatch({
    type: SHOW_WELCOME_MODAL,
    payload: showWelcomeModal
  })
}
export const setShowShareModal = showShareModal => dispatch => {
  dispatch({
    type: SHOW_SHARE_MODAL,
    payload: showShareModal
  })
}
export const setShowFeedbackModal = showFeedbackModal => dispatch => {
  dispatch({
    type: SHOW_FEEDBACK_MODAL,
    payload: showFeedbackModal
  })
}
export const setShowGainPointsModal = showGainPointsModal => dispatch => {
  dispatch({
    type: SHOW_GAIN_POINTS_MODAL,
    payload: showGainPointsModal
  })
}
export const setIsLoggedIn = isLoggedIn => dispatch => {
  dispatch({
    type: SET_IS_LOGGED_IN,
    payload: isLoggedIn
  })
}
export const setUserReduce = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user
  })
}