import { LOAD_POSTS } from '../types'

const initialState = {
  posts: [],
  bookmarkedPosts: []
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
        bookmarkedPosts: action.payload.filter(post => post.bookmarked)
      }

    default:
      return state
  }
  return state
}
