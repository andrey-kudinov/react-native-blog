import { LOAD_POSTS, TOGGLE_BOOKMARKED, REMOVE_POST, ADD_POST } from '../types'

const initialState = {
  posts: [],
  bookmarkedPosts: [],
  loading: true
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
        bookmarkedPosts: action.payload.filter(post => post.bookmarked),
        loading: false
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

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        bookmarkedPosts: state.bookmarkedPosts.filter(
          post => post.id !== action.payload
        )
      }

    case ADD_POST:
      return {
        ...state,
        posts: [{ ...action.payload }, ...state.posts]
      }

    default:
      return state
  }
  return state
}
