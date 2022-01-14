import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKMARKED, ADD_POST } from '../types'
import { DB } from '../../db'

export const loadPosts = () => {
  return async dispatch => {
    const posts = await DB.getPosts()
    
    dispatch({ type: LOAD_POSTS, payload: [] })
  }
}

export const toggleBookmarked = id => {
  return {
    type: TOGGLE_BOOKMARKED,
    payload: id
  }
}

export const removePost = id => {
  return {
    type: REMOVE_POST,
    payload: id
  }
}

export const addPost = post => {
  post.id = Date.now().toString()

  return {
    type: ADD_POST,
    payload: post
  }
}
