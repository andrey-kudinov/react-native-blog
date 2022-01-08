import { combineReducers, createStore } from 'redux'
import { postReducer } from './reducers/post'

const rootReducer = combineReducers({ blog: postReducer })

export default createStore(rootReducer)
