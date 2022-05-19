import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {showMissionsModalReducer} from './reducers'
import {showWelcomeModalReducer} from './reducers'
import {showShareModalReducer} from './reducers'

const rootReducer = combineReducers({
  showMissionsModalReducer,
  showWelcomeModalReducer,
  showShareModalReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk))