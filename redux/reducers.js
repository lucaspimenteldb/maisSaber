import {SHOW_MISSIONS_MODAL, SHOW_FEEDBACK_MODAL, SHOW_WELCOME_MODAL, SHOW_SHARE_MODAL, SHOW_GAIN_POINTS_MODAL} from './actions.js'

const initalState = {
  showMissionsModal: false,
  showWelcomeModal: true,
  showShareModal: false,
  showFeedbackModal: false,
  showGainPointsModal: false,
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
function showFeedbackModalReducer(state = initalState, action) {
  if (action.type === SHOW_FEEDBACK_MODAL) {
    return {...state, showFeedbackModal: action.payload}
  }
  return state;
}
function showGainPointsModalReducer(state = initalState, action) {
  if (action.type === SHOW_GAIN_POINTS_MODAL) {
    return {...state, showGainPointsModal: action.payload}
  }
  return state;
}

export {showMissionsModalReducer, showWelcomeModalReducer, showShareModalReducer, showFeedbackModalReducer, showGainPointsModalReducer}