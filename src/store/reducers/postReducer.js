import { LOAD_POSTS, TOGGLE_BOOKMARKED } from '../types'

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

    case TOGGLE_BOOKMARKED:
      const posts = state.posts.map(post => {
        if (post.id === action.payload) {
          post.bookmarked = !post.bookmarked
        }
        return post
      })

      return {
        ...state,
        posts,
        bookmarkedPosts: posts.filter(post => post.bookmarked)
      }

    default:
      return state
  }
  return state
}
