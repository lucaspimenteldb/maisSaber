import {SHOW_MISSIONS_MODAL} from './actions.js'

const initalState = {
  showMissionsModal: false,
}

function showMissionsModalReducer(state = initalState, action) {
  if (action.type === SHOW_MISSIONS_MODAL) {
    return {...state, showMissionsModal: action.payload}
  }
  return state;
}

export default showMissionsModalReducer;