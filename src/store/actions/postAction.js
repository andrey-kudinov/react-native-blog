import * as FileSystem from 'expo-file-system'
import { LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKMARKED, ADD_POST } from '../types'
import { DB } from '../../db'

export const loadPosts = () => {
  return async dispatch => {
    const posts = await DB.getPosts()

    dispatch({ type: LOAD_POSTS, payload: [] })
  }
}

export const toggleBookmarked = post => async dispatch => {
  await DB.updatePost(post)
  dispatch({
    type: TOGGLE_BOOKMARKED,
    payload: post.id
  })
}

export const removePost = id => async dispatch => {
  await DB.removePost(id)
  dispatch({
    type: REMOVE_POST,
    payload: id
  })
}

export const addPost = post => async dispatch => {
  const fileName = post.img.split('/').pop()
  const newPath = FileSystem.documentDirectory + fileName

  try {
    FileSystem.moveAsync({
      to: newPath,
      from: post.img
    })
  } catch (error) {
    console.log('Error -', error)
  }

  const payload = { ...post, img: newPath },
    id = await DB.createPost(payload)

  payload.id = id

  dispatch({
    type: ADD_POST,
    payload
  })
}
