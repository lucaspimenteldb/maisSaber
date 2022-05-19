export const SHOW_MISSIONS_MODAL = 'SHOW_MISSIONS_MODAL'

export const setShowMissionsModal = showMissionsModal => dispatch => {
  dispatch({
    type: SHOW_MISSIONS_MODAL,
    payload: showMissionsModal
  })
}