import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {showMissionsModalReducer, showShareModalReducer, showFeedbackModalReducer, showWelcomeModalReducer, showGainPointsModalReducer, setIsLoggedInReducer} from './reducers'

const rootReducer = combineReducers({
  showMissionsModalReducer,
  showWelcomeModalReducer,
  showShareModalReducer,
  showFeedbackModalReducer,
  showGainPointsModalReducer,
  setIsLoggedInReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))