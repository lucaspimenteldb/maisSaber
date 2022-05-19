import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import showMissionsModalReducer from './reducers'

const rootReducer = combineReducers({showMissionsModalReducer})

export const Store = createStore(rootReducer, applyMiddleware(thunk))