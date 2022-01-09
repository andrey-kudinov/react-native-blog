import { DATA } from "../../data"
import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKMARKED } from "../types"

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA
  }
}

export const toggleBookmarked = id => {
  return {
    type: TOGGLE_BOOKMARKED,
    payload: id
  }
}

export const removePost = id => {
  console.log(id)
  return {
    type: REMOVE_POST,
    payload: id
  }
}
