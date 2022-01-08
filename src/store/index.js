import { combineReducers, createStore } from 'redux'
import { postReducer } from './reducers/postReducer'

const rootReducer = combineReducers({ blog: postReducer })

export default createStore(rootReducer)
