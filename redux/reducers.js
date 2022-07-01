import { SHOW_MISSIONS_MODAL, SHOW_FEEDBACK_MODAL, SHOW_WELCOME_MODAL, SHOW_SHARE_MODAL, SHOW_GAIN_POINTS_MODAL, SHOW_BOOK_MODAL, SET_IS_LOGGED_IN, SET_USER } from './actions.js'

const initialState = {
  showMissionsModal: false,
  showWelcomeModal: true,
  showShareModal: false,
  showFeedbackModal: false,
  showGainPointsModal: false,
  showBookModal: false,
  isLoggedIn: false,
  user: {}
}

function showMissionsModalReducer(state = initialState, action) {
  if (action.type === SHOW_MISSIONS_MODAL) {
    return { ...state, showMissionsModal: action.payload }
  }
  return state;
}
function showWelcomeModalReducer(state = initialState, action) {
  if (action.type === SHOW_WELCOME_MODAL) {
    return { ...state, showWelcomeModal: action.payload }
  }
  return state;
}
function showShareModalReducer(state = initialState, action) {
  if (action.type === SHOW_SHARE_MODAL) {
    return { ...state, showShareModal: action.payload }
  }
  return state;
}
function showFeedbackModalReducer(state = initialState, action) {
  if (action.type === SHOW_FEEDBACK_MODAL) {
    return { ...state, showFeedbackModal: action.payload }
  }
  return state;
}
function showGainPointsModalReducer(state = initialState, action) {
  if (action.type === SHOW_GAIN_POINTS_MODAL) {
    return { ...state, showGainPointsModal: action.payload }
  }
  return state;
}
function showBookModalReducer(state = initialState, action) {
  if (action.type === SHOW_BOOK_MODAL) {
    return { ...state, showBookModal: action.payload }
  }
  return state;
}
function setIsLoggedInReducer(state = initialState, action) {
  if (action.type === SET_IS_LOGGED_IN) {
    return { ...state, isLoggedIn: action.payload}
  }
  return state;
}
function userReducer(state = initialState, action) {
  if (action.type === SET_USER) {
    return { ...state, user: action.payload}
  }
  return state;
}

export { showMissionsModalReducer, showWelcomeModalReducer, showShareModalReducer, showFeedbackModalReducer, showGainPointsModalReducer, showBookModalReducer, setIsLoggedInReducer, userReducer }