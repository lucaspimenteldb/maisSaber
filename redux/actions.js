export const SHOW_MISSIONS_MODAL = 'SHOW_MISSIONS_MODAL'
export const SHOW_WELCOME_MODAL = 'SHOW_WELCOME_MODAL'
export const SHOW_SHARE_MODAL = 'SHOW_SHARE_MODAL'

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