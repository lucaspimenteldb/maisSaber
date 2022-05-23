import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {showMissionsModalReducer, showShareModalReducer, showFeedbackModalReducer, showWelcomeModalReducer} from './reducers'

const rootReducer = combineReducers({
  showMissionsModalReducer,
  showWelcomeModalReducer,
  showShareModalReducer,
  showFeedbackModalReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))