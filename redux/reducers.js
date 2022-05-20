import {SHOW_MISSIONS_MODAL, SHOW_WELCOME_MODAL, SHOW_SHARE_MODAL} from './actions.js'

const initalState = {
  showMissionsModal: false,
  showWelcomeModal: true,
  showShareModal: false,
}

function showMissionsModalReducer(state = initalState, action) {
  if (action.type === SHOW_MISSIONS_MODAL) {
    return {...state, showMissionsModal: action.payload}
  }
  return state;
}
function showWelcomeModalReducer(state = initalState, action) {
  if (action.type === SHOW_WELCOME_MODAL) {
    return {...state, showWelcomeModal: action.payload}
  }
  return state;
}
function showShareModalReducer(state = initalState, action) {
  if (action.type === SHOW_SHARE_MODAL) {
    return {...state, showShareModal: action.payload}
  }
  return state;
}

export {showMissionsModalReducer, showWelcomeModalReducer, showShareModalReducer}