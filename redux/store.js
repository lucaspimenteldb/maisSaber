import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {showMissionsModalReducer, showShareModalReducer, showFeedbackModalReducer, showWelcomeModalReducer, showGainPointsModalReducer} from './reducers'

const rootReducer = combineReducers({
  showMissionsModalReducer,
  showWelcomeModalReducer,
  showShareModalReducer,
  showFeedbackModalReducer,
  showGainPointsModalReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))