import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKMARKED, ADD_POST } from "../types"

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: []
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
