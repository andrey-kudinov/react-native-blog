import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { postReducer } from './reducers/postReducer'

const rootReducer = combineReducers({ blog: postReducer })

export default createStore(rootReducer, applyMiddleware(thunk))
