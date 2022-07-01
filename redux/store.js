import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {showMissionsModalReducer, showShareModalReducer, showFeedbackModalReducer, showWelcomeModalReducer, showGainPointsModalReducer, showBookModalReducer, setIsLoggedInReducer, userReducer} from './reducers'

const rootReducer = combineReducers({
  showMissionsModalReducer,
  showWelcomeModalReducer,
  showShareModalReducer,
  showFeedbackModalReducer,
  showGainPointsModalReducer,
  showBookModalReducer,
  setIsLoggedInReducer,
  userReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))